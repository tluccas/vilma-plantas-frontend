"use client";

import { useState } from "react";
import { CategoryService } from "@/features/products/api/CategoryService";
import { useAuthContext } from "@/features/auth/contexts/useAuthContext";
import type { CategoryResponse } from "@/features/products/types/CategoryType";
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
      <td className="p-6 space-x-4 grid grid-cols-2 justify-center">
        {isAdmin && (
          <>
            <button
              className="font-medium text-base text-green-600 transition hover:scale-110 hover:text-green-700"
              onClick={() => onEdit(category)}
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="font-medium text-base text-red-600 hover:cursor-pointer hover:text-red-700 transition hover:scale-110 disabled:opacity-50"
            >
              {isDeleting ? (
                "Deletando..."
              ) : (
                <i className="bi bi-trash-fill hover:text-red-800 "></i>
              )}
            </button>
          </>
        )}
      </td>
    </tr>
  );
}
