import Header from "../components/layout/Header";
import Hero from "../components/layout/home/Hero";
import TopCategories from "../components/layout/home/TopCategories";
import { Helmet } from "react-helmet-async";

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
                        <TopCategories />
                    
                </main>
            </div>
        </>
    );
}