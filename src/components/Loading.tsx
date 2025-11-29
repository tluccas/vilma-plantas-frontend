import { useEffect, useState } from "react";

export default function Loading() {
      const frases = [
        "Aguarde um instante...",
        "Adicionando adubo...",
        "Preparando seu jardim digital...",
        "Regando as sementes..."
      ];

      const [index, setIndex] = useState(0);

    useEffect(() => {
        
        document.body.style.overflow = "hidden";

        const timer = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % frases.length);
        }, 2000);

        return () => {
            clearInterval(timer);
            document.body.style.overflow = "auto";
        };
      }, [frases.length]);

    return (
        <div className="h-screen w-full bg-(--color-background) flex flex-col items-center justify-center select-none">
      {/* Ícone com animação */}
      <img src="../../public/plant.svg"
      className= "w-32 animate-plant-grow origin-bottom"
      />
      {/* Texto */}
      <p className="mt-6 text-(--color-text-muted) text-lg font-medium tracking-wide">
        {frases[index]}
      </p>
    </div>
    );
}