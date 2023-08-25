"use client";
import Image from "next/image";
import { useState, useRef, useEffect, forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import { Alert, Snackbar, Typography } from "@mui/material";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert severity="error" elevation={6} ref={ref} {...props} />;
});

export default function Join() {
  const captchaRef = useRef(null);
  const [length, setLength] = useState();
  const [name, setName] = useState();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [submiting, setSubmiting] = useState(false);
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("none");
  const onChange = (value) => {
    setToken(value);
  };
  const [textContent, setTextContent] = useState("");
  const [top, setTop] = useState("100vh");

  top && console.log(top);
  const openModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.top = 0;
    modal.style.right = 0;
    setDisplay("block");
    let position = 100;
    const interval = setInterval(() => {
      if (position <= 0) {
        clearInterval(interval);
        let secondsLeft = 20;
        setTextContent(`Redirecting in ${secondsLeft} seconds`);

        const countdownInterval = setInterval(() => {
          secondsLeft--;
          setTextContent(`Redirecting in ${secondsLeft} seconds`);

          if (secondsLeft === 0) {
            clearInterval(countdownInterval);
            router.push("/about");
          }
        }, 1000);
      } else {
        position -= 10;
        console.log(position);
        setTop(`${position}`);
      }
    }, 10);
  };
  const createWaitlist = async (e) => {
    e.preventDefault();
    setSubmiting(true);
    try {
      const Response = await fetch("/api/waitlist/new", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
      });
      if (Response.ok) {
        // router.push("/countdown")
        const data = await Response.json();
        console.log(data);
        setName(`${data.firstName}`);
        openModal();
        console.log("success");
      }
      if (!Response.ok) {
        setOpen(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmiting(false);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/waitlist/new");
      const data = await response.json();
      console.log(data);
      setLength(data.length);
    })();
  }, []);

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div className="absolute top-0 min-h-screen h-full w-full">
        <img
          src="./images/star-blob.png"
          className="relative -top-8 xl:hidden"
        />
        <img
          src="./images/d-mini-stars.png"
          className="fixed -top-8 xl:block hidden w-[60%] object-cover right-0 h-[calc(100vh + 1rem)]"
        />
        <img
          src="./images/star.png"
          className="absolute top-8 xl:block hidden w-[30%] object-cover left-[25%] opacity-40"
        />
        <img
          src="./images/mini-stars.png"
          className="absolute bottom-0 xl:hidden"
        />
        <img
          style={{ height: "110px", bottom: "-25%" }}
          src="./images/mini-stars.png"
          className="relative w-full object-cover xl:hidden"
        />
      </div>
      <div className="flex items-center justify-between relative p-4 xl:w-10/12 xl:mx-auto xl:mt-8">
        <img
          src="./images/logo-star.png"
          alt=""
          className="w-36 object-contain"
        />
        <p className="text-[#807B00] bg-[#FFFBD2] text-xs py-1 px-2 rounded-xl lg:hidden">
          Coming soon
        </p>
      </div>
      <div className="relative flex flex-col items-center w-full pt-12 xl:pt-8 2xl:pt-12 lg:flex-row-reverse lg:w-10/12 lg:mx-auto xl:justify-between animate__animated animate__fadeIn">
        <a
          href="/"
          className="absolute left-0 ml-4 mt-28 lg:-ml-16 lg:mt-2 xl:-ml-20"
        >
          <svg
            width="30"
            height="43"
            viewBox="0 0 17 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8281 2.84375L2.17188 15.5L14.8281 28.1562"
              stroke="#DAA520"
              strokeWidth="2.21875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <img
          src="./images/hero-2.png"
          alt=""
          className="w-[60%] object-contain xl:w-[40%] animate__animated animate__flipInY"
        />
        <section className="pt-5 text-center xl:pl-5 xl:flex-[0.60]">
          <div className="hidden lg:flex items-center gap-x-5 relative mb-5">
            <img
              src="./images/logo.png"
              alt=""
              className="w-36 object-contain"
            />
            <p className="text-[#807B00] bg-[#FFFBD2] text-xs py-1 px-2 rounded-xl">
              Coming soon
            </p>
          </div>
          <h1 className="text-4xl text-white text-center lg:text-left lg:text-3xl">
            Get early access!
          </h1>
          <p className="text-white max-w-[85%] text-center mx-auto text-base mt-2 lg:text-left lg:max-w-[100%] lg:ml-0 font-light">
            Be the First to Experience the Revolution of Freelance with
            Creedlance: Join Our Exclusive Waitlist Today! and claim a premium
            username
          </p>
          <img
            src="./images/logo.png"
            alt=""
            className="w-32 mx-auto mt-10 object-contain lg:hidden"
          />
          <div className="w-11/12 mx-auto mt-8 lg:w-full">
            <form className="form--login" id="my-demo-form">
              <div className="flex items-center gap-x-4">
                <div className="flex-1">
                  <label className="text-sm text-white text-left w-full block mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    className="text-white py-2 px-4 border-[1px] border-white bg-transparent rounded-lg w-full placeholder:text-white placeholder:font-light focus:outline-none"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-white text-left w-full block mb-1">
                    Last name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    id="lastName"
                    className="text-white py-2 px-4 border-[1px] border-white bg-transparent rounded-lg w-full placeholder:text-white placeholder:font-light focus:outline-none"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              <div className="flex-1 mt-4">
                <label className="text-sm text-white text-left w-full block mb-1">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  className="text-white py-2 px-4 border-[1px] border-white bg-transparent rounded-lg w-full placeholder:text-white placeholder:font-light focus:outline-none"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div style={{ paddingTop: "30px" }}>
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey="6LfXTv0mAAAAAMkW1dfGmtACoM9ZK_BOTn1BXBWo"
                  onChange={onChange}
                />
              </div>
              <button
                style={{
                  width: "100px",
                  height: "50px",
                  margin: "50px 50px 50px 0px",
                  backgroundColor: "#DAA520",
                  display: "block",
                  color: "white",
                  width: "100%",
                  borderRadius: "5px",
                }}
                onClick={(e) => createWaitlist(e)}
              >
                Join The WaitList
              </button>
            </form>
            <p className="text-white mt-4 xl:mt-8">
              Current Waitlisted Users{" "}
              {length && (
                <span className="bg-gradient-to-br font-medium text-xl xl:text-2xl xl:pl-2 from-white to-gray-600 bg-clip-text text-transparent">
                  {length}
                </span>
              )}
            </p>
            <div className="xl:hidden">
              <p className="text-lg text-white text-center mt-8">Follow Us</p>
              <div className="flex mt-4 justify-center gap-x-3 items-center">
                <a href="#">
                  <img
                    src="./images/fb.png"
                    alt=""
                    className="w-8 object-contain relative -top-[5px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="./images/tw.png"
                    alt=""
                    className="w-8 object-contain relative -top-[5px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="./images/ig.png"
                    alt=""
                    className="w-8 object-contain relative -top-[5px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="./images/th.png"
                    alt=""
                    className="w-8 object-contain relative -top-[5px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div
          className={`fixed z-50 bg-[#000] h-screen w-screen top-[${top}] flex flex-col justify-center gap-y-6 transition duration-200`}
          id="myModal"
        >
          <span
            style={{
              position: "absolute",
              top: "20px",
              right: "35px",
              fontSize: "24px",
              cursor: "pointer",
              color: "white",
            }}
            id="cancelButton"
            className="close-button"
          >
            &times;
          </span>
          <img
            src="./images/creed.gif"
            className="h-[50vh] object-contain -mt-[30vh] mx-auto xl:-mt-[15vh] -mb-[170px] lg:-mb-[100px]"
          />
          <div>
            <h2 className="text-white text-center text-2xl px-4">
              You have successfully joined for this waitlist
            </h2>
            {length && (
              <p className="text-white text-center mt-2 xl:text-xl">
                You are number{" "}
                <span className="text-yellow-500">{length + 1}</span> on the
                waitlist
              </p>
            )}
            <p
              className="text-white text-center mt-2 xl:text-xl"
              style={{
                margin: "0 auto",
                width: "60%",
                fontSize: "16px !important",
                color: "white",
              }}
            >
              Hello {name && <span id="modal-firstName">{name}</span>}
              <span id="modal-lastName"></span> you have successfully joined
              this waitlist. We will give you updates via mail at every step of
              the way.
            </p>
            <p
              className="text-white text-center mt-2 xl:text-xl"
              style={{
                margin: "0 auto",
                width: "60%",
                fontSize: "14px !important",
                color: "white",
              }}
            >
              {" "}
              Please do well to take a screenshot of this page and post on any
              social media you are active on. Also remember to tag us. Thank you
              🔥
            </p>
            <p
              className="text-white text-center mt-4 xl:text-xl"
              id="count-down"
            >
              {textContent}
            </p>
          </div>
        </div>
      </div>
      <section className="hidden xl:flex items-center justify-center w-full relative top-14">
        <div className="hidden xl:flex py-5 mt-5 w-10/12 border-t-[1px] border-dashed border-gray-700 text-gray-400 items-center justify-between">
          <p className="">Creedlance ltd 2023 All Rights Reserved</p>
          <a href="/" className="text-[#daa520] underline underline-offset-2">
            About us
          </a>
        </div>
        <section className="hidden xl:absolute xl:bottom-[5rem] w-10/12 xl:flex xl:flex-col xl:items-end">
          {/* <!-- <p className="text-lg text-white text-center mt-8 pr-[2.7em]">Follow Us</p> --> */}
          <div className="flex mt-4 justify-center gap-x-5 items-center">
            <a href="#">
              <img
                src="./images/fb.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
            <a href="#">
              <img
                src="./images/tw.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
            <a href="#">
              <img
                src="./images/ig.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
            <a href="#">
              <img
                src="./images/th.png"
                alt=""
                className="w-6 object-contain relative -top-[5px]"
              />
            </a>
          </div>
        </section>
      </section>

      <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
        <SnackbarAlert>
          <Typography>
            An Error Occured, check your credentials and try again
          </Typography>
          {!token && <Typography>recaptcha is required</Typography>}
        </SnackbarAlert>
      </Snackbar>
    </>
  );
}
