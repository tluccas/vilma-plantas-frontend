interface SlideBarItemsProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

function SidebarItem({ icon, label, active, onClick }: SlideBarItemsProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-all
       ${active ? "bg-(--color-primary) text-(--color-background)" : "hover:bg-black/10"}`}
    >
      {icon} {label}
    </button>
  );
}

export default SidebarItem;