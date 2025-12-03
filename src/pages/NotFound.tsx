import Lottie from "lottie-react";
import Header from "../components/layout/Header";
import animationData from "../assets/animations/404 Page.json";
import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.body.classList.add("no-scroll");

        return () => {
            document.body.classList.remove("no-scroll");
        }
    }, [])
    return(
        <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="font-bold">Ops, página não encontrada</h1>
        <Lottie
            className="mb-10" 
            animationData={animationData}
            loop={true}
            style={ {width: 500, height: 500} }
            />
        </div>
        </>
    )
}