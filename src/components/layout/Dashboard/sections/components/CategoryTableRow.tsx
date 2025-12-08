import { useState } from "react";
import { CategoryService } from "../../../../../features/products/api/CategoryService";
import { useAuthContext } from "../../../../../features/auth/contexts/useAuthContext";
import type { CategoryResponse } from "../../../../../features/products/types/CategoryType";
const categoryService = new CategoryService();

interface CategoryTableRowProps {
  category: CategoryResponse;
  onDelete: (id: number) => void; // ← Callback para atualizar lista
  onEdit: (category: CategoryResponse) => void;
}

export default function CategoryTableRow({
  category,
  onDelete,
  onEdit,
}: CategoryTableRowProps) {
  const { id, name, description } = category;
  const { isAdmin } = useAuthContext();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!isAdmin) {
      alert("Você não tem permissão");
      return;
    }

    const confirmed = window.confirm(
      `Tem certeza que deseja deletar "${name}"?`
    );

    if (!confirmed) return;

    setIsDeleting(true);
    try {
      await categoryService.deleteCategory(id);
      onDelete(id); // ← Notifica o componente pai
    } catch (error) {
      alert("Erro ao deletar categoria");
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <tr className="odd:bg-stone-200 even:bg-stone-50 border-b border-stone-300">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap"
      >
        {id}
      </th>
      <td className="px-6 py-4 text-stone-800">{name}</td>
      <td className="px-6 py-4 text-stone-800">
        {description.length > 150
          ? description.substring(0, 147) + "..."
          : description}
      </td>
      <td className="p-6 text-center align-middle">
        {isAdmin && (
          <>
            <div className="flex justify-center items-center gap-4">
              {/* Botão Editar Categoria */}
              <button
                onClick={() => onEdit(category)}
                className="flex items-center justify-center w-9 h-9 hover:cursor-pointer rounded-lg border border-green-100 bg-green-50 text-green-600 transition-all duration-200 hover:bg-green-600 hover:text-white hover:shadow-md hover:shadow-green-100 active:scale-95"
                title="Editar Categoria"
              >
                <i className="bi bi-pencil-square text-lg"></i>
              </button>

              {/* Botão Deletar Categoria */}
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex items-center justify-center w-9 h-9 hover:cursor-pointer rounded-lg border border-red-100 bg-red-50 text-red-600 transition-all duration-200 hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Excluir Categoria"
              >
                {isDeleting ? (
                  /* Spinner minimalista para não deformar o botão */
                  <div className="h-4 w-4 border-2 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
                ) : (
                  <i className="bi bi-trash-fill text-base"></i>
                )}
              </button>
            </div>
          </>
        )}
      </td>
    </tr>
  );
}
