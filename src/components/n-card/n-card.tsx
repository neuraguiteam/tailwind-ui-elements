
import React, { forwardRef, HTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "n-card",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent",
        ghost: "border-none shadow-none bg-transparent",
      },
      elevation: {
        default: "shadow-sm",
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        compact: "p-2",
      },
      radius: {
        default: "rounded-lg",
        none: "rounded-none",
        sm: "rounded-md",
        lg: "rounded-xl",
        full: "rounded-full",
      },
      clickable: {
        true: "hover:cursor-pointer hover:shadow-md transition-apple",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      elevation: "default",
      size: "default",
      radius: "default",
      clickable: false,
    },
  }
)

export interface CardProps 
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  flat?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  imgPosition?: "top" | "bottom";
  imgClassName?: string;
}

const NCard = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    children,
    variant,
    elevation,
    size,
    radius,
    clickable,
    flat,
    header,
    footer,
    imgSrc,
    imgAlt = "",
    imgPosition = "top",
    imgClassName,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ 
            variant, 
            elevation: flat ? "none" : elevation, 
            size, 
            radius,
            clickable 
          }),
          className
        )}
        {...props}
      >
        {imgSrc && imgPosition === "top" && (
          <div className={cn(
            radius === "none" ? "rounded-none" : radius === "full" ? "rounded-full" : "rounded-t-lg",
            "overflow-hidden",
            imgClassName
          )}>
            <img 
              src={imgSrc} 
              alt={imgAlt} 
              className="w-full h-auto object-cover transition-apple" 
            />
          </div>
        )}
        
        {header && (
          <div className={cn(
            size === "default" ? "px-6 py-4" : 
            size === "sm" ? "px-4 py-3" : 
            size === "lg" ? "px-8 py-5" :
            "px-2 py-2",
            "border-b",
            imgSrc && imgPosition === "top" ? "" : 
            radius === "none" ? "" : 
            radius === "full" ? "rounded-t-full" : "rounded-t-lg"
          )}>
            {header}
          </div>
        )}
        
        <div>
          {children}
        </div>
        
        {footer && (
          <div className={cn(
            size === "default" ? "px-6 py-4" : 
            size === "sm" ? "px-4 py-3" : 
            size === "lg" ? "px-8 py-5" :
            "px-2 py-2",
            "border-t",
            imgSrc && imgPosition === "bottom" ? "" : 
            radius === "none" ? "" : 
            radius === "full" ? "rounded-b-full" : "rounded-b-lg"
          )}>
            {footer}
          </div>
        )}
        
        {imgSrc && imgPosition === "bottom" && (
          <div className={cn(
            radius === "none" ? "rounded-none" : radius === "full" ? "rounded-full" : "rounded-b-lg",
            "overflow-hidden",
            imgClassName
          )}>
            <img 
              src={imgSrc} 
              alt={imgAlt} 
              className="w-full h-auto object-cover transition-apple" 
            />
          </div>
        )}
      </div>
    )
  }
)
NCard.displayName = "NCard"

export default NCard;
