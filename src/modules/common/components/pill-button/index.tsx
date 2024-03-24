import { clx } from "@medusajs/ui"
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        primary:
          "border border-white text-white hover:text-black hover:bg-white hover:shadow-lg dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black",
        primary_dark:
          "border border-black text-black hover:text-white hover:bg-black hover:shadow-lg dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white",
        secondary:
          "bg-white text-black hover:bg-slate-50 hover:shadow-lg dark:bg-black dark:text-white dark:hover:bg-slate-900",
        secondary_dark:
          "bg-black text-white hover:bg-slate-900 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-slate-50",
        },
      size: {
        default: "py-2 px-4",
        sm: "p-2",
        lg: "w-full py-3 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

    const PillButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
        <button
            className={clx(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
        />
        );
    }
);

export { PillButton, buttonVariants };