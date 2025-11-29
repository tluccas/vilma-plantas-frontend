import { useEffect } from "react";
import { Leaf } from "lucide-react";

export default function Loading() {

    useEffect(() => {
        
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="h-screen w-full bg-(--color-background) flex flex-col items-center justify-center select-none">
      {/* Ícone com animação */}
      <img src="../../public/plant.svg"
      className= "w-32 animate-plant-grow origin-bottom"
      />
      {/* Texto */}
      <p className="mt-6 text-(--color-text-muted) text-lg font-medium tracking-wide">
        Aguarde um instante...
      </p>
    </div>
    );
}