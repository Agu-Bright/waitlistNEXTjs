import mongoose, { Schema, model, models } from "mongoose";

const waitListSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your first name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    lowercase: true,
    // validate: [validator.isEmail, "Please provide an email"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Waitlist = models.Waitlist || model("Waitlist", waitListSchema);
export default Waitlist;
