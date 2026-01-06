import { ReactNode } from "react";

type CustomButtonProps = {
  text: string;
  icon?: string;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
};

export function CustomButton({
  text,
  icon,
  href,
  onClick,
  showArrow = true,
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: CustomButtonProps) {
  const baseClasses =
    "inline-flex items-center box-border border border-transparent rounded-3xl font-medium leading-5 focus:outline-none transition duration-300 ease-in-out select-none shadow-xl";

  const variantClasses = {
    primary:
      "text-white bg-(--button-primary-bg) hover:bg-(--button-secondary-hover-bg) focus:ring-4 focus:ring-brand-medium",
    secondary:
      "text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-200",
  };

  const iconElement = icon ? (
    <i className={`${icon} ms-1.5`}></i>
  ) : (
    <svg
      className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  );

  const sizeClasses = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-4 py-2.5",
    lg: "text-lg px-8 py-4",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <>
      {children || text}
      {showArrow && iconElement}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
