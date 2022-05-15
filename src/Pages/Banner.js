import React from "react";
import image from '../assets/images/chair.png'
import PrimaryButton from "./PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse mt-28">
          <img
            src={image}
            class="max-w-sm  rounded-lg shadow-2xl "
          alt=""/>
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
