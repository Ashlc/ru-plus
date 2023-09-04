import React from "react";
import icon from "../../assets/pix.svg";
import { Link } from "react-router-dom";
import Navigator from "../../components/Navigator/Navigator";

function Pix(){
    return(
        <div className="">
            {/* HEADER */}
            <div className="w-full flex justify-center items-center bg-stdblue text-[#fff] border rounded-b-2xl h-14">
                <p className="font-semibold text-base">PIX</p>
            </div>
            {/* PAGE */}
            <div className="page w-full flex flex-col items-center justify-center pt-11">
                {/* PIX ICON */}
                <div className="w-10/12 h-1/5 flex justify-center">
                    <img src={icon} alt="pix icon"/>
                </div>
                {/* SALDO */}
                <div className="saldo border border-[#BDC3C7] flex rounded-3xl justify-center w-10/12 h-20 items-center mt-11">
                    <p className="text-[#7F8C8D] font-extrabold text-3xl mr-2">R$</p>
                    <b className="text-[#2D3436] font-extrabold text-4xl">00</b>
                </div>
                {/* PIX CODE */}
                <div className="saldo border border-[#BDC3C7] flex rounded-3xl justify-center w-10/12 h-10 items-center mt-11">
                    <p className="text-[#7F8C8D] font-normal text-xs">41226F99-2F4F-486D-486D-B515-B0BE7308CAD</p>
                </div>
                {/* COPY PIX CODE */}
                <div className="border border-[#005CA9] rounded-3xl p-2 mt-7 w-5/6 text-[#005CA9] flex justify-center">
                    <p>COPIAR</p>
                </div>
                <p className="text-xs flex justify-center text-[#7F8C8D] mt-3">VALIDADE: 30 MINUTOS</p>
                {/* VOLTAR BUTTON */}
                <div className="flex items-center justify-center w-10/12 h-36">
                    <p className="text-underline text-[#005CA9] text-xs font-normal">
                        <Link to={`/inserir`}>
                            VOLTAR
                        </Link>
                    </p>
                </div>
            </div>
            <Navigator className="absolute bottom-0 w-full"/>
        </div>
    );
}
export default Pix