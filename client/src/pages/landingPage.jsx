import React from "react";
import Navbar from "../components/Navbar";
import "./Landing.css";
import Bg from "../components/HeroBg.jsx";
import Lottie from "lottie-react";
import Lottie1 from "../lotties/landing lottie 1.json";
import Lottie2 from "../lotties/landing lottie 2.json";
import { Link } from "react-router-dom";

const landingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] h-[100%] absolute z-[-1] blur-[100px] top-0 left-0">
        <Bg />
      </div>
      <section className="px-[10%] flex justify-center items-center h-[90vh] flex-col">
        <h1 className="text-[3rem] pb-6">
          Be <span className="font-semibold">Bold</span>, Collaborative and
          Innovative
        </h1>
        <Link to={"/signup"}>
          <button className="py-4 px-16 text-xl homeBtn">Be a Hustler</button>
        </Link>

        <p className="text-[0.8rem] pt-2">
          Already have an account?{" "}
          <Link to={"/login"}>
            <button className="underline">Sign in</button>{" "}
          </Link>
        </p>
      </section>
      <section className="px-[10%]">
        <h1 className="text-[3rem] font-semibold">
          Welcome to <span className="font-bold">Truly Hustle</span>
        </h1>
        <div className="h-[40vh] flex justify-between">
          <div className="w-[40%] flex items-center">
            <p className="font-medium text-lg">
              At Truly Hustle, we provide a vibrant and comfortable workspace
              environment for like-minded individuals to come together,
              collaborate, and amplify their skills. Our spaces are designed to
              encourage creativity, productivity, and foster brilliant
              connections.
            </p>
          </div>
          <div className="w-[35%] h-1 flex flex-col gap-14">
            <Lottie animationData={Lottie1} loop={true} />
          </div>
        </div>
        <div className="h-[40vh] flex justify-between">
          <div className="w-[35%] h-1 flex flex-col gap-14">
            <Lottie animationData={Lottie2} loop={true} />
          </div>
          <div className="w-[40%] flex items-center">
            <p className="font-medium text-lg">
              Featuring premium facilities, cutting-edge technology, and
              flexible solutions, Truly Hustle is designed to meet the specific
              needs of freelancers, entrepreneurs, startups, and remote teams.
              Unleash your potential and let your ideas flourish.
            </p>
          </div>
        </div>
      </section>
      <section className="px-[10%]">
        <h1 className="text-[3rem] pt-7 font-semibold">Product Overview</h1>
        <div className="h-[90vh] pt-16 flex justify-center">
          <div className="card bg-[#ffffff] h-[75vh] w-[60vw] rounded-2xl"></div>
        </div>
      </section>
    </div>
  );
};

export default landingPage;