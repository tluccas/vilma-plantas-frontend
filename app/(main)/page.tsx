import type { Metadata } from "next";
import { Suspense } from "react";
import Hero from "@/components/layout/home/Hero";
import TopCategories from "@/components/layout/home/TopCategories";
import Delivery from "@/components/layout/home/Delivery";
import HomeProducts from "@/components/layout/home/HomeProducts";

export const metadata: Metadata = {
  title: "Home | Vilma Plantas",
};

function ProductsLoading() {
  return (
    <section className="top-categories px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center py-12">
        <p className="text-gray-500">Carregando produtos...</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-(--color-background)">
      <main className="py-20">
        <Hero />
        <Delivery />
        <TopCategories />
        <Suspense fallback={<ProductsLoading />}>
          <HomeProducts />
        </Suspense>
      </main>
    </div>
  );
}
