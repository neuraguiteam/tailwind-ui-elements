
import React, { forwardRef, InputHTMLAttributes, useState, useEffect } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const rangeVariants = cva(
  "n-range appearance-none w-full h-2 bg-secondary rounded-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2 border-input",
        ghost: "bg-transparent",
      },
      size: {
        default: "h-2",
        sm: "h-1",
        lg: "h-3",
      },
      showTooltip: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      showTooltip: false,
    },
  }
)

export interface RangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof rangeVariants> {
  showTicks?: boolean;
  tickCount?: number;
  showLabels?: boolean;
  minLabel?: string;
  maxLabel?: string;
  valueLabel?: string;
  trackColor?: string;
  thumbColor?: string;
  tooltipPosition?: "top" | "bottom";
}

const NRange = forwardRef<HTMLInputElement, RangeProps>(
  ({ 
    className, 
    variant,
    size,
    showTooltip,
    showTicks = false,
    tickCount = 5,
    showLabels = false,
    minLabel,
    maxLabel,
    valueLabel,
    value,
    min = 0,
    max = 100,
    step = 1,
    trackColor = "bg-primary",
    thumbColor = "bg-primary",
    tooltipPosition = "top",
    disabled,
    onChange,
    ...props 
  }, ref) => {
    const [currentValue, setCurrentValue] = useState<number>(
      value !== undefined ? Number(value) : Number(min)
    );
    const [showValue, setShowValue] = useState(false);

    // Update current value when value prop changes
    useEffect(() => {
      if (value !== undefined) {
        setCurrentValue(Number(value));
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      if (value === undefined) {
        setCurrentValue(newValue);
      }
      onChange?.(e);
    };

    const percentage = ((currentValue - Number(min)) / (Number(max) - Number(min))) * 100;
    
    // Generate ticks
    const ticks = [];
    if (showTicks) {
      const interval = (Number(max) - Number(min)) / (tickCount - 1);
      for (let i = 0; i < tickCount; i++) {
        const tickValue = Number(min) + i * interval;
        const tickPercentage = (tickValue - Number(min)) / (Number(max) - Number(min)) * 100;
        ticks.push({ value: tickValue, position: tickPercentage });
      }
    }

    return (
      <div className="w-full py-4">
        <div className="relative">
          <div className="relative">
            <input
              type="range"
              ref={ref}
              value={currentValue}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              onChange={handleChange}
              onMouseEnter={() => setShowValue(true)}
              onMouseLeave={() => setShowValue(false)}
              onFocus={() => setShowValue(true)}
              onBlur={() => setShowValue(false)}
              className={cn(
                rangeVariants({ variant, size, showTooltip }),
                `[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:${thumbColor} [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:transition-all`,
                `[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:${thumbColor} [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:transition-all`,
                disabled && "opacity-50 cursor-not-allowed",
                className
              )}
              style={{
                backgroundImage: `linear-gradient(to right, ${trackColor} ${percentage}%, var(--secondary) ${percentage}%)`
              }}
              {...props}
            />

            {showTooltip && showValue && (
              <div 
                className={cn(
                  "absolute z-10 left-0 transform -translate-x-1/2 px-2 py-1 text-xs rounded bg-accent text-accent-foreground animate-fade-in",
                  tooltipPosition === "top" ? "bottom-6" : "top-6"
                )}
                style={{ left: `${percentage}%` }}
              >
                {valueLabel ? `${valueLabel}: ${currentValue}` : currentValue}
              </div>
            )}
          </div>

          {showTicks && (
            <div className="relative h-4 mt-1">
              {ticks.map((tick, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-2 bg-muted-foreground/50"
                  style={{ left: `${tick.position}%` }}
                />
              ))}
            </div>
          )}
        </div>

        {showLabels && (
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>{minLabel || min}</span>
            <span>{maxLabel || max}</span>
          </div>
        )}
      </div>
    )
  }
)
NRange.displayName = "NRange"

export default NRange;
