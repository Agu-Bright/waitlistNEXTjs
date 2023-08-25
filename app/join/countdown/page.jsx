import React from "react";

const Countdown = () => {
  return (
    <>
      <div id="myModal">
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
          <p className="text-white text-center mt-2 xl:text-xl">
            You are number <span className="text-yellow-500">11</span> on the
            waitlist
          </p>
          <p
            className="text-white text-center mt-2 xl:text-xl"
            style={{
              margin: "0 auto",
              width: "60%",
              fontSize: "16px !important",
              color: "white",
            }}
          >
            Hello <span id="modal-firstName"></span>{" "}
            <span id="modal-lastName"></span> you have successfully joined this
            waitlist. We will give you updates via mail at every step of the
            way.
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
          <p className="text-white text-center mt-4 xl:text-xl" id="count-down">
            Redirecting to home page in{" "}
            <span className="text-yellow-500">23</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
