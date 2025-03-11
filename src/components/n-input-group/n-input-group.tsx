
import React, { forwardRef, HTMLAttributes, ReactElement, cloneElement } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import NInput, { InputProps } from "../n-input/n-input"

const inputGroupVariants = cva(
  "flex relative",
  {
    variants: {
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const inputGroupAddonVariants = cva(
  "inline-flex items-center justify-center bg-muted px-3 border border-input text-muted-foreground",
  {
    variants: {
      position: {
        prepend: "border-r-0 rounded-l-md",
        append: "border-l-0 rounded-r-md",
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      position: "prepend",
      size: "default",
    },
  }
)

export interface InputGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  prependClassName?: string;
  appendClassName?: string;
}

type InputGroupElement = React.ReactElement<InputProps, typeof NInput>;

const NInputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ 
    className, 
    children,
    size,
    prepend,
    append,
    prependClassName,
    appendClassName,
    ...props 
  }, ref) => {
    // Find and modify the NInput child to have rounded corners based on prepend/append
    const modifiedChildren = React.Children.map(children, child => {
      if (
        React.isValidElement(child) && 
        child.type === NInput
      ) {
        const inputChild = child as InputGroupElement;
        let inputClassName = inputChild.props.className || "";
        
        // Adjust border radius based on prepend/append
        if (prepend && !append) {
          inputClassName = cn(inputClassName, "rounded-l-none");
        } else if (!prepend && append) {
          inputClassName = cn(inputClassName, "rounded-r-none");
        } else if (prepend && append) {
          inputClassName = cn(inputClassName, "rounded-none");
        }
        
        return cloneElement(inputChild, {
          className: inputClassName,
          size: inputChild.props.size || size,
        });
      }
      return child;
    });

    return (
      <div
        ref={ref}
        className={cn(
          inputGroupVariants({ size }),
          className
        )}
        {...props}
      >
        {prepend && (
          <div 
            className={cn(
              inputGroupAddonVariants({ position: "prepend", size }),
              prependClassName
            )}
          >
            {prepend}
          </div>
        )}
        
        {modifiedChildren}
        
        {append && (
          <div 
            className={cn(
              inputGroupAddonVariants({ position: "append", size }),
              appendClassName
            )}
          >
            {append}
          </div>
        )}
      </div>
    )
  }
)
NInputGroup.displayName = "NInputGroup"

export default NInputGroup;
