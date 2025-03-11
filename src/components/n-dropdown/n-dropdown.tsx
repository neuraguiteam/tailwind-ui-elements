
import React, { useState, useRef, forwardRef, HTMLAttributes, useEffect } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn, createChainedHandler } from "@/lib/utils"

const dropdownVariants = cva(
  "n-dropdown",
  {
    variants: {
      position: {
        "bottom-start": "origin-top-left",
        "bottom-end": "origin-top-right",
        "bottom-center": "origin-top",
        "top-start": "origin-bottom-left",
        "top-end": "origin-bottom-right",
        "top-center": "origin-bottom",
        "left-start": "origin-right-top",
        "left-center": "origin-right",
        "left-end": "origin-right-bottom",
        "right-start": "origin-left-top",
        "right-center": "origin-left",
        "right-end": "origin-left-bottom",
      },
      size: {
        default: "w-48",
        sm: "w-32",
        lg: "w-64",
        auto: "w-auto",
      },
      offset: {
        default: "my-1",
        none: "",
        sm: "my-0.5",
        lg: "my-2",
      },
    },
    defaultVariants: {
      position: "bottom-start",
      size: "default",
      offset: "default",
    },
  }
)

const dropdownTriggerVariants = cva(
  "inline-flex items-center justify-center select-none",
  {
    variants: {
      variant: {
        default: "",
        button: "n-button bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface DropdownProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> {
  trigger: React.ReactNode;
  triggerVariant?: "default" | "button";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  closeOnSelect?: boolean;
}

const NDropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ 
    className, 
    children,
    trigger,
    triggerVariant = "default",
    position,
    size,
    offset,
    open: controlledOpen,
    onOpenChange,
    closeOnClickOutside = true,
    closeOnEsc = true,
    closeOnSelect = true,
    ...props 
  }, forwardedRef) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const isOpen = controlledOpen !== undefined ? controlledOpen : open;

    const handleOpenChange = (newOpen: boolean) => {
      if (controlledOpen === undefined) {
        setOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };

    const toggle = () => handleOpenChange(!isOpen);

    useEffect(() => {
      if (!closeOnClickOutside) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (
          isOpen && 
          ref.current && 
          menuRef.current && 
          !ref.current.contains(e.target as Node) && 
          !menuRef.current.contains(e.target as Node)
        ) {
          handleOpenChange(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, closeOnClickOutside]);

    useEffect(() => {
      if (!closeOnEsc) return;

      const handleEscapeKey = (e: KeyboardEvent) => {
        if (isOpen && e.key === "Escape") {
          handleOpenChange(false);
        }
      };

      document.addEventListener("keydown", handleEscapeKey);
      return () => document.removeEventListener("keydown", handleEscapeKey);
    }, [isOpen, closeOnEsc]);

    const handleSelect = closeOnSelect 
      ? createChainedHandler(() => handleOpenChange(false)) 
      : undefined;

    const setRefs = (el: HTMLDivElement) => {
      if (typeof forwardedRef === 'function') {
        forwardedRef(el);
      } else if (forwardedRef) {
        forwardedRef.current = el;
      }
      ref.current = el;
    };

    return (
      <div className="relative inline-block text-left" ref={setRefs}>
        <div 
          onClick={toggle}
          className={cn(
            dropdownTriggerVariants({ variant: triggerVariant }),
            "cursor-pointer"
          )}
        >
          {trigger}
        </div>
        
        {isOpen && (
          <div
            ref={menuRef}
            className={cn(
              dropdownVariants({ position, size, offset }),
              "absolute z-50 animate-scale-in",
              position?.startsWith("bottom") ? "top-full" : "",
              position?.startsWith("top") ? "bottom-full" : "",
              position?.startsWith("left") ? "right-full" : "",
              position?.startsWith("right") ? "left-full" : "",
              position?.endsWith("start") ? "left-0" : "",
              position?.endsWith("end") ? "right-0" : "",
              position?.endsWith("center") ? "left-1/2 -translate-x-1/2" : "",
              className
            )}
            {...props}
          >
            {React.Children.map(children, child => {
              if (!React.isValidElement(child)) return child;
              
              return React.cloneElement(child as React.ReactElement<any>, {
                onClick: createChainedHandler(
                  child.props.onClick,
                  handleSelect
                ),
              });
            })}
          </div>
        )}
      </div>
    )
  }
)
NDropdown.displayName = "NDropdown"

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  selected?: boolean;
  icon?: React.ReactNode;
}

const NDropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ 
    className, 
    children,
    disabled = false,
    selected = false,
    icon,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "n-dropdown-item",
          selected && "bg-accent text-accent-foreground",
          className
        )}
        data-disabled={disabled ? "true" : undefined}
        data-selected={selected ? "true" : undefined}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </div>
    )
  }
)
NDropdownItem.displayName = "NDropdownItem"

export { NDropdown, NDropdownItem };
