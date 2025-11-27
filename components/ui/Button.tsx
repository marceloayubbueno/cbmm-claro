import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-full font-medium transition-all duration-200 group";
  
  const variants = {
    primary: "bg-slate-800 text-slate-100 hover:bg-slate-900",
    secondary: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-blue-50",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {(variant === "primary" || variant === "secondary") && (
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
            </svg>
          </span>
        )}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

