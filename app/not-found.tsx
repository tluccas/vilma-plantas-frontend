"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/animations/404 Page.json";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-10">
        <h1 className="font-bold tex-xl md:text-2xl lg:text-3xl">
          Ops, página não encontrada
        </h1>
        <Lottie
          className="mb-10 w-90!  md:w-100! md:h-100! lg:w-110! lg:h-110!"
          animationData={animationData}
          loop={true}
          style={{ width: 500, height: 500 }}
        />
      </div>
    </>
  );
}
