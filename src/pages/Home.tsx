import Header from "../components/layout/Header";
import Hero from "../components/layout/home/Hero";
import Footer from "../components/layout/Footer";
import TopCategories from "../components/layout/home/TopCategories";
import { Helmet } from "react-helmet-async";
import Delivery from "../components/layout/home/Delivery";
import HomeProducts from "../components/layout/home/HomeProducts";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home | Vilma Plantas</title>
            </Helmet>
            <div className="min-h-screen overflow-x-hidden bg-(--color-background)">
                <Header />
                <main className="py-20">
                        <Hero />  
                        < Delivery />
                        <TopCategories />
                        <HomeProducts />
                </main>
                <Footer />
            </div>
        </>
    );
}