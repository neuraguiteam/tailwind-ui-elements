
import React, { useState, forwardRef, createContext, useContext, HTMLAttributes, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn, uniqueId } from "@/lib/utils"

// Tabs Container
const tabsVariants = cva(
  "w-full",
  {
    variants: {
      alignment: {
        center: "text-center",
        left: "text-left",
        right: "text-right",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      alignment: "left",
      fullWidth: false,
    },
  }
)

// Tabs List
const tabsListVariants = cva(
  "n-tabs-list mb-2",
  {
    variants: {
      variant: {
        default: "bg-muted",
        pills: "bg-transparent space-x-1",
        underline: "bg-transparent border-b",
        card: "bg-transparent",
      },
      alignment: {
        center: "justify-center",
        left: "justify-start",
        right: "justify-end",
        stretch: "justify-between",
      },
      fullWidth: {
        true: "flex w-full",
        false: "inline-flex",
      },
    },
    defaultVariants: {
      variant: "default",
      alignment: "left",
      fullWidth: false,
    },
  }
)

// Tab Button
const tabVariants = cva(
  "n-tab",
  {
    variants: {
      variant: {
        default: "",
        pills: "rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none",
        underline: "rounded-none shadow-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none",
        card: "border-b border-transparent rounded-t-lg shadow-none data-[state=active]:border-border data-[state=active]:border-b-transparent data-[state=active]:bg-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1",
        lg: "h-12 px-5 py-3",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

type TabsContextValue = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: string;
  size: string;
};

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsProvider");
  }
  return context;
};

export interface TabsProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabsVariants> {
  defaultTab?: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  variant?: "default" | "pills" | "underline" | "card";
  size?: "default" | "sm" | "lg";
}

const NTabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    className, 
    children,
    alignment,
    fullWidth,
    defaultTab,
    activeTab: controlledActiveTab,
    onTabChange,
    variant = "default",
    size = "default",
    ...props 
  }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab || "");

    const handleTabChange = (tabId: string) => {
      if (controlledActiveTab === undefined) {
        setActiveTab(tabId);
      }
      onTabChange?.(tabId);
    };
    
    const currentTab = controlledActiveTab !== undefined ? controlledActiveTab : activeTab;

    return (
      <TabsContext.Provider 
        value={{ 
          activeTab: currentTab, 
          setActiveTab: handleTabChange,
          variant,
          size: size || "default"
        }}
      >
        <div
          ref={ref}
          className={cn(
            tabsVariants({ alignment, fullWidth }),
            "transition-apple",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
NTabs.displayName = "NTabs"

export interface TabsListProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof tabsListVariants> {}

const NTabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ 
    className, 
    children,
    variant: listVariant,
    alignment,
    fullWidth,
    ...props 
  }, ref) => {
    const { variant } = useTabsContext();
    
    return (
      <div
        ref={ref}
        className={cn(
          tabsListVariants({ 
            variant: listVariant || variant as any, 
            alignment, 
            fullWidth 
          }),
          "transition-apple",
          className
        )}
        role="tablist"
        {...props}
      >
        {children}
      </div>
    )
  }
)
NTabsList.displayName = "NTabsList"

export interface TabProps extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof tabVariants> {
  id: string;
  disabled?: boolean;
}

const NTab = forwardRef<HTMLButtonElement, TabProps>(
  ({ 
    className, 
    children,
    id,
    disabled = false,
    variant: tabVariant,
    size: tabSize,
    fullWidth,
    ...props 
  }, ref) => {
    const { activeTab, setActiveTab, variant, size } = useTabsContext();
    const isActive = activeTab === id;
    
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        id={`tab-${id}`}
        aria-selected={isActive}
        aria-controls={`panel-${id}`}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        data-state={isActive ? "active" : "inactive"}
        className={cn(
          tabVariants({ 
            variant: tabVariant || variant as any, 
            size: tabSize || size as any,
            fullWidth 
          }),
          "transition-apple",
          className
        )}
        onClick={() => setActiveTab(id)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
NTab.displayName = "NTab"

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

const NTabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ 
    className, 
    children,
    id,
    ...props 
  }, ref) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === id;
    
    if (!isActive) return null;
    
    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`panel-${id}`}
        aria-labelledby={`tab-${id}`}
        tabIndex={0}
        className={cn(
          "p-4 transition-all animate-fade-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
NTabPanel.displayName = "NTabPanel"

export { NTabs, NTabsList, NTab, NTabPanel };
