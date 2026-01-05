import type { Metadata } from "next";
import Hero from "@/components/layout/home/Hero";
import TopCategories from "@/components/layout/home/TopCategories";
import Delivery from "@/components/layout/home/Delivery";
import HomeProducts from "@/components/layout/home/HomeProducts";

export const metadata: Metadata = {
  title: "Home | Vilma Plantas",
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-(--color-background)">
      <main className="py-20">
        <Hero />
        <Delivery />
        <TopCategories />
        <HomeProducts />
      </main>
    </div>
  );
}
