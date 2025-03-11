
import React, { forwardRef, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "n-badge",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        accent: "border-transparent bg-accent text-accent-foreground",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
      pill: {
        true: "rounded-full",
        false: "rounded-md",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      pill: true,
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  textVariant?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
  dot?: boolean;
  dotColor?: string;
}

const NBadge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant, 
    size,
    pill,
    textVariant = "normal-case",
    dot = false,
    dotColor,
    children,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, pill }),
          textVariant,
          "inline-flex items-center",
          className
        )}
        {...props}
      >
        {dot && (
          <span 
            className={cn(
              "mr-1 h-2 w-2 rounded-full",
              dotColor || (variant === "outline" ? "bg-foreground" : "bg-current")
            )} 
          />
        )}
        {children}
      </div>
    )
  }
)
NBadge.displayName = "NBadge"

export default NBadge;
