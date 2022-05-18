import React from "react";
import bg from "../assets/images/appointment.png";
import PrimaryButton from "./PrimaryButton";

const Contact = () => {
  return (
    <div
      className="flex justify-center py-5 "
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="">
        <div className="text-center">
          <h4 className="text-secondary">Contact Us</h4>
          <h4 className="text-3xl ">Stay connected with us</h4>
        </div>
        <div className="py-5">
          <div className="form-control w-[450px]  ">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control py-2 w-[450px]">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div>
            <input
              className="h-[136px] w-[450px] input input-bordered"
              type="text"
              placeholder="Massage"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
