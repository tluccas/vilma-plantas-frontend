import { useWhatsapp } from "@/hooks/useWhatsapp";

interface DeliveryCardProps {
    title: string;
}

export default function DeliveryCard({ title }: DeliveryCardProps) {
    const whatsapp = useWhatsapp();
    return (
        <div className="bg-neutral-primary-soft block max-w-sm transition-transform hover:-translate-y-2 p-6 border border-transparent rounded-base rounded-2xl shadow-xl/30 overflow-hidden mx-auto">
            <i className="bi bi-geo-alt-fill w-7 h-7 mb-4"></i>
            <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
            </a>
            <p className="mb-3 text-body select-none">Para mais detalhes sobre entregas entre em contato:</p>
            <a href={whatsapp.getWhatsappUrl(`Olá, gostaria de saber se você está fazendo entrega para ${title}`)} className="inline-flex font-medium items-center text-fg-brand hover:underline text-(--color-primary) text-shadow-sm">
                Whatsapp
                <i className="bi bi-box-arrow-up-right text-sm ms-2"></i>
            </a>
        </div>
        )
}
