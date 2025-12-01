
interface Props {
    title: string;
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent) => void;
    buttonText: string;
    isLoading?: boolean;
}

export default function AuthForm({ title, children, onSubmit, buttonText, isLoading = false }: Props) {
    return (
        <form
            onSubmit={onSubmit}
             className="relative w-full max-w-md mx-auto p-6 rounded-xl bg-white shadow-2xl overflow-hidden"
        >       
                <svg className="absolute -top-px left-0 w-full" viewBox="0 0 1440 80" fill="#16A34A">
                    <path d="M0,40 C10,80 960,0 1440,80 L1440,0 L0,0 Z"></path>
                </svg>
                <img
                    src="../../../../public/logo.png"
                    alt="Vilma Plantas - Logo"
                    className="w-20 mx-auto! mb-3!"
                />
            <h1 className="text-3xl! font-semibold text-center mb-8">{title}</h1>

            <div className="flex flex-col gap-6 mb-8">{children}</div>
      
            <button
                type="submit"
                disabled={isLoading}
                className={`w-[80%] mt-5! py-3 rounded-lg transition text-white font-medium ${
                    isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' // Estilo do Carregamento
                        : 'bg-green-600 hover:bg-green-700'
                }`}
            >
                {buttonText}
            </button>

            <svg className="absolute -bottom-px left-0 w-full" viewBox="0 0 1440 80" fill="#16A34A">
                <path d="M0,40 C10,0 960,80 1440,0 L1440,80 L0,80 Z"></path>
            </svg>

        </form>
    );
}