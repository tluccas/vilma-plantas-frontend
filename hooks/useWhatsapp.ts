import toast from "react-hot-toast";

export function useWhatsapp() {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const defaultMessage = "Olá, Vilma! Quero saber mais sobre seus produtos.";

    const openWhatsapp = (customMessage?: string) => {
        if (!phoneNumber) {
            toast.error("Número de WhatsApp não configurado.");
            return;
        }

        const message = customMessage || defaultMessage;
        const url = `https://wa.be/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    const getWhatsappUrl = (customMessage?: string) => {
        if (!phoneNumber) {
            toast.error("Número de WhatsApp não configurado.");
            return "";
        }

        const message = customMessage || defaultMessage;
        return `https://wa.be/${phoneNumber}?text=${encodeURIComponent(message)}`;
    }

    return { openWhatsapp, getWhatsappUrl, phoneNumber: !!phoneNumber };
}