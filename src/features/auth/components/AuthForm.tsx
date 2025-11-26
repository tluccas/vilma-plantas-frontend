
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
            className="w-full max-w-sm mx-auto mt-10 p-6 bg-white rounded-md shadow"
        >

            <h1 className="text-2x1 font-semibold text-center mb-6">{title}</h1>

            <div className="flex flex-col gap-4">{children}</div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full mt-4 py-2 rounded-md transition ${
                    isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' // Estilo do Carregamento
                        : 'bg-green-600 hover:bg-green-700'
                }`}
            >
                {buttonText}
            </button>
        </form>
    );
}