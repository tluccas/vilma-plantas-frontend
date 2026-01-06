"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuthContext } from "@/features/auth/contexts/useAuthContext";
import CategoryTableRow from "./components/CategoryTableRow";
import type { CategoryResponse } from "@/features/products/types/CategoryType";
import { CategoryService } from "@/features/products/api/CategoryService";
import CategoryFormCreate from "./components/CategoryForm";

const categoryService = new CategoryService();

export default function Category() {
  const { isAdmin } = useAuthContext();
  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] =
    useState<CategoryResponse | null>(null);

  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);
      if (!isAdmin) return;

      const res = await categoryService.getCategories();
      setCategories(res);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    } finally {
      setLoading(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  async function handleAddCategory() {
    try {
      await loadCategories();
    } catch (error) {
      console.error("Erro ao adicionar categoria:", error);
    } finally {
      setIsFormOpen(false);
      setEditingCategory(null);
    }
  }

  async function handleEditingCategory(category: CategoryResponse) {
    setEditingCategory(category);
    setIsFormOpen(true);
  }

  const handleDeleteCategory = (deletedId: number) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== deletedId));
  };

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-600">
        Carregando categorias...
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6 text-stone-900">
        Gerenciar Categorias
      </h1>
      <div className="flex justify-end ">
        <button
          className="mb-4 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition hover:cursor-pointer"
          onClick={() => {
            if (!isAdmin) {
              alert("Você não tem permissão");
              return;
            }
            setEditingCategory(null);
            setIsFormOpen(!isFormOpen);
          }}
        >
          <i className="bi bi-plus text-xl"></i> Adicionar Categoria
        </button>
      </div>
      <div className="relative overflow-x-auto bg-stone-50 shadow-md rounded-lg border border-stone-300">
        <table className="w-full text-sm text-left rtl:text-right text-stone-700">
          <thead className="bg-stone-200 border-b border-stone-300">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3 font-medium text-stone-900">
                ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-stone-900">
                Nome da Categoria
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-stone-900">
                Descrição
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-stone-900">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-300 text-center">
            {categories.length === 0 ? (
              <tr className="bg-stone-100">
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-stone-600"
                >
                  Nenhuma categoria encontrada
                </td>
              </tr>
            ) : (
              categories.map((cat) => (
                <CategoryTableRow
                  key={cat.id}
                  category={cat}
                  onDelete={handleDeleteCategory}
                  onEdit={handleEditingCategory}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 "
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-9">
              <h2 className="text-lg font-semibold m-auto">Nova Categoria</h2>
              <button onClick={() => setIsFormOpen(false)}>✖</button>
            </div>

            <CategoryFormCreate
              onAdd={handleAddCategory}
              initData={editingCategory}
            />
          </div>
        </div>
      )}
    </div>
  );
}
