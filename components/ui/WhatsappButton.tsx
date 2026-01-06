import { useWhatsapp } from "@/hooks/useWhatsapp";
import { CustomButton } from "@/components/ui/CustomButton";

type WhatsAppButtonProps = {
  message?: string;
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function WhatsAppButton({
  message,
  text = "Contato via WhatsApp",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  const { getWhatsappUrl } = useWhatsapp();

  return (
    <CustomButton
      text={text}
      href={getWhatsappUrl(message)}
      icon="bi bi-whatsapp"
      size={size}
      className={className}
    />
  );
}
