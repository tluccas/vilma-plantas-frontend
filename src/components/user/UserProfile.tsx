
import LogoutButton from "../ui/LogoutButton";

interface Props {
    name?: string;
    email?: string;
    phone? : string;
}

export default function UserProfile({ name, email, phone }: Props) {
    return (
         <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
            
            <h3 className="text-xl font-semibold text-center text-(--color-text) mb-4">
            {name}
            </h3>

            <table className="text-sm w-full">
            <tbody>
                <tr>
                <td className="font-semibold py-2 text-(--color-text)">Email:</td>
                <td className="text-(--color-text-mted)">{email}</td>
                </tr>

                <tr>
                <td className="font-semibold py-2 text-(--color-text)">Telefone:</td>
                <td className="text-(--color-text-muted)">{phone ?? "N/A"}</td>
                </tr>
            </tbody>
            </table>

            <button className="btn-primary w-full mt-4">
            Editar Perfil
            </button>

            <div className="mt-3">
            <LogoutButton className="w-full h-12" />
            </div>

      </div>
    </div>
  );
}