import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "$src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
      font: "default",
    },
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
        lg: "h-11 rounded-md px-8",
        sm: "h-9 rounded-md px-3",
      },
      font: {
        default: "",
        dosis: "font-dosis",
        exo2: "font-exo2",
        firaSans: "font-firaSans",
        hedvigLettersSerif: "font-hedvigLettersSerif",
        jost: "font-jost",
        oswald: "font-oswald",
        playfairDisplay: "font-playfairDisplay",
        playpenSans: "font-playpenSans",
        ptSansNarrow: "font-ptSansNarrow",
        quando: "font-quando",
        sairaSemiCondensed: "font-sairaSemiCondensed",
        texturina: "font-texturina",
        fresca: "font-fresca",
        kural: "font-kurale",
        dhurjati: "font-dhurjati",
      },
      variant: {
        default: "bg-brand-900 text-black  hover:bg-brand-500/80 ",
        brandOutline: "border border-brand-900 hover:text-accent-foreground",
        sky: "bg-blue-700 text-gray-100  hover:bg-blue-700/90 ",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline: "border border-gray-400/60 bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        dark: "bg-slate-800 text-gray-100 hover:bg-slate-800/80",
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, font, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ className, size, variant, font }))} ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
