
import React, { forwardRef, InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "n-input",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2",
        ghost: "border-none shadow-none bg-transparent",
        filled: "border-transparent bg-muted",
      },
      state: {
        default: "",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
        warning: "border-yellow-500 focus-visible:ring-yellow-500",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 py-1 text-xs rounded-md",
        lg: "h-12 px-5 py-3 text-base rounded-md",
      },
      radius: {
        default: "rounded-md",
        none: "rounded-none",
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      state: "default",
      size: "default",
      radius: "default",
    },
  }
)

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  success?: boolean;
  warning?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errorMessage?: string;
  helpText?: string;
}

const NInput = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type = "text",
    variant,
    size,
    radius,
    state: stateProp,
    error,
    success,
    warning,
    leftIcon,
    rightIcon,
    errorMessage,
    helpText,
    disabled,
    ...props 
  }, ref) => {
    // Determine state based on props
    let state = stateProp;
    if (error) state = "error";
    else if (success) state = "success";
    else if (warning) state = "warning";

    return (
      <div className="w-full space-y-1">
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              inputVariants({ variant, size, radius, state }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              disabled && "opacity-50 cursor-not-allowed",
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>
        
        {errorMessage && state === "error" && (
          <p className="text-xs text-destructive">{errorMessage}</p>
        )}
        
        {helpText && !errorMessage && (
          <p className="text-xs text-muted-foreground">{helpText}</p>
        )}
      </div>
    )
  }
)
NInput.displayName = "NInput"

export default NInput;
