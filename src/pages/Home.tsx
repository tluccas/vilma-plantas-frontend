import Header from "../components/layout/Header";
import Hero from "../components/layout/home/Hero";

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#ebebeb' }}>
            <Header />
            <main className="py-20">
                <Hero />
            </main>
        </div>
    );
}