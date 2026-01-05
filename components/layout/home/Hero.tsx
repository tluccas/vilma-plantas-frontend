"use client";

import { useAuthContext } from "@/features/auth/contexts/useAuthContext";

export default function Hero() {
    const { isAuthenticated } = useAuthContext();

    function handleButtonClick(){
        if(isAuthenticated){
            window.location.href = "/carrinho";
        }
        else{
            window.location.href = "/login";
        }
    }

    return (
        <section
            className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6 bg-(--color-background)"
        
        >
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                        {/* Texto */}
                        <div className="flex flex-col space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">

                            {/* Badge */}
                            <div className="inline-flex items-center justify-center lg:justify-start">
                                <span
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                                    style={{
                                        backgroundColor: "#554b4c",
                                        color: "#ebebeb",
                                        border: "1px solid #635859",
                                    }}
                                >
                                    <i
                                        className="bi bi-leaf mr-2 text-base"
                                        style={{ color: "#6cc24a" }}
                                    ></i>
                                    100% Natural e Sustentável
                                </span>
                            </div>

                            {/* Título */}
                            <h1
                                className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight"
                                style={{
                                    color: "#473f3f",
                                    fontFamily: "'Poppins', sans-serif",
                                    lineHeight: "1.1",
                                }}
                            >
                                Transforme seu{" "}
                                <span className="relative">
                                    <span style={{ color: "#6cc24a" }}>lar</span>
                                    <svg
                                        className="absolute -bottom-2 left-0 w-full h-3"
                                        viewBox="0 0 100 10"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0,8 Q25,2 50,6 T100,4"
                                            stroke="#92d050"
                                            strokeWidth="3"
                                            fill="none"
                                            opacity="0.7"
                                        />
                                    </svg>
                                </span>{" "}
                                em um oásis verde
                            </h1>

                            {/* Subtítulo */}
                            <p
                                className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
                                style={{
                                    color: "#494949",
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                Descubra nossa coleção exclusiva de plantas que trazem
                                vida, purificam o ar e criam ambientes únicos e acolhedores.
                            </p>

                            {/* Botões */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                                
                                    <button
                                        onClick={handleButtonClick}
                                        className="group inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                                        style={{
                                            backgroundColor: "#6cc24a",
                                            fontFamily: "'Poppins', sans-serif",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.backgroundColor = "#92d050")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.backgroundColor = "#6cc24a")
                                        }
                                    >
                                        <i className="bi bi-cart3 mr-2 text-xl"></i>
                                        Comprar Agora
                                    </button>
                                <button
                                    className="group inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-full border-2 transition-all duration-300 hover:scale-105"
                                    style={{
                                        color: "#473f3f",
                                        borderColor: "#635859",
                                        backgroundColor: "transparent",
                                        fontFamily: "'Poppins', sans-serif",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#554b4c";
                                        e.currentTarget.style.color = "#ebebeb";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                        e.currentTarget.style.color = "#473f3f";
                                    }}
                                >
                                    <i className="bi bi-play-circle mr-2 text-xl"></i>
                                    Ver Catálogo
                                </button>
                            </div>

                            {/* Estatísticas */}
                            <div className="flex items-center justify-center lg:mx-0 space-x-6 pt-4">
                                <div className="text-center">
                                    

                                    <div
                                        className="text-3xl font-bold"
                                        style={{ color: "#6cc24a" }}
                                    >
                                        100%
                                    </div>
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: "#494949" }}
                                    >
                                        Natural
                                    </div>
                                </div>

                                <div
                                    className="w-px h-10"
                                    style={{ backgroundColor: "#635859" }}
                                ></div>

                                <div className="text-center">
                                    <div
                                        className="text-3xl font-bold"
                                        style={{ color: "#6cc24a" }}
                                    >
                                        20+
                                    </div>
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: "#494949" }}
                                    >
                                        Variedade de Plantas
                                    </div>
                                </div>

                                <div
                                    className="w-px h-10"
                                    style={{ backgroundColor: "#635859" }}
                                ></div>

                                <div className="text-center">
                                    <div
                                        className="text-3xl font-bold"
                                        style={{ color: "#6cc24a" }}
                                    >
                                        100%
                                    </div>
                                    <div
                                        className="text-sm font-medium"
                                        style={{ color: "#494949" }}
                                    >
                                        Satisfação
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Imagem */}
                        <div className="relative flex items-center justify-center order-1 lg:order-2">
                            <div className="relative">
                                <div
                                    className="absolute inset-0 rounded-full scale-105 opacity-20"
                                    style={{ backgroundColor: "#92d050" }}
                                ></div>

                                 <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                                    <img
                                        src="/images/plants/hero-img.webp"
                                        alt="Plantas - Vilma Plantas"
                                        className="w-full h-auto max-w-xs lg:max-w-md object-cover"
                                        style={{ aspectRatio: "3/4" }}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                                </div> 

                            </div>
                        </div>
                    </div>

                    {/* Indicador */}
                    <div className="flex justify-center mt-10">
                        <div className="flex flex-col items-center space-y-1">
                            <span
                                className="text-sm font-medium animate-pulse"
                                style={{ color: "#494949" }}
                            >
                                Explore nossos produtos
                            </span>
                            <i
                                className="bi bi-chevron-double-down text-xl animate-bounce"
                                style={{ color: "#6cc24a" }}
                            ></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }   