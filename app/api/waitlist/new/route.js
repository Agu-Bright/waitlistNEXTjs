import Waitlist from "@models/waitlist";
import connectDb from "@utils/connectDb";

export const POST = async (req) => {
  const { firstName, lastName, email } = await req.json();
  if (!firstName || !lastName || !email) {
    return new Response("incomplete credentials", { status: 400 });
  }
  try {
    await connectDb;
    const userExists = await Waitlist.findOne({ email });
    if (userExists) {
      return new Response("You have already joined the waitlist", {
        status: 400,
      });
    }
    const newUser = await Waitlist.create({
      firstName,
      lastName,
      email,
    });
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create user, try again later", {
      status: 500,
    });
  }
};
export const GET = async (req) => {
  try {
    await connectDb;
    const users = await Waitlist.find();
    const length = users.length;
    return new Response(JSON.stringify({ length: length }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create user, try again later", {
      status: 500,
    });
  }
};
