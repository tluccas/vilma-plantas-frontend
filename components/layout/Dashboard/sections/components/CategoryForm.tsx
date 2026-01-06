"use client";

import { useAuthContext } from "@/features/auth/contexts/useAuthContext";
import { useState, useEffect } from "react";
import { CategoryService } from "@/features/products/api/CategoryService";
const categoryService = new CategoryService();

interface Props {
  onAdd: () => void;
  initData?: {
    id: number;
    name: string;
    description: string;
  } | null;
}

export default function CategoryFormCreate({ onAdd, initData }: Props) {
  const isEdit = !!initData?.id;

  const { isAdmin } = useAuthContext();
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState(initData?.name || "");
  const [description, setDescription] = useState(initData?.description || "");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!isAdmin) {
      alert("Você não tem permissão");
      return;
    }

    setIsCreating(true);
    try {
      if (isEdit) {
        await categoryService.updateCategory(initData!.id, {
          name,
          description,
        });
      } else {
        await categoryService.createCategory({ name, description });
      }

      onAdd();
    } catch (error) {
      alert("Erro ao criar categoria");
      console.error(error);
    } finally {
      setIsCreating(false);
    }
  }

  useEffect(() => {
    if (initData) {
      setName(initData.name);
      setDescription(initData.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [initData]);
  return (
    <form className="max-w-sm mx-auto space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2.5 text-sm font-medium text-heading">
          Nome da Categoria
        </label>
        <input
          type="text"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
          placeholder=""
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2.5 text-sm font-medium text-heading">
          Descrição
        </label>
        <textarea
          className="bg-neutral-secondary-medium border radius-border-default-medium text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder=""
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition hover:cursor-pointer"
        >
          {isCreating
            ? "Salvando..."
            : isEdit
            ? "Salvar Alterações"
            : "Criar Categoria"}
        </button>
      </div>
    </form>
  );
}
