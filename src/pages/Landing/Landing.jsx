import "./Landing.css";
import React from "react";
import logo from "../../assets/RUPLUS.svg"

function Landing() {
  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className="gap-2 flex flex-col justify-center items-center">
          <img src={logo} className="w-36" />
          <p className="font-medium text-white">Carteira Virtual</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <input type="email" placeholder='Email' className="leading-none rounded-lg border-silver border w-72 pl-3 py-1 focus:outline-moonstone" />
          <input type="password" placeholder='Senha' className="leading-none rounded-lg border-silver border w-72 pl-3 py-1 focus:outline-moonstone" />
          <a href=""><p className="text-white text-sm underline underline-offset-4">Esqueceu sua senha?</p></a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
