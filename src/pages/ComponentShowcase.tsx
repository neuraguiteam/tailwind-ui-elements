
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { 
  Bell, 
  Calendar, 
  ChevronDown, 
  Eye, 
  EyeOff, 
  Filter, 
  Home, 
  Info, 
  Mail, 
  Search, 
  Settings, 
  User 
} from 'lucide-react';

const ComponentShowcase = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [rangeValue, setRangeValue] = useState<number[]>([50]);
  const [multiRangeValue, setMultiRangeValue] = useState<number[]>([25, 75]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your form has been successfully submitted!",
    });
  };

  const handleTabClick = (tab: string) => {
    toast({
      title: `Selected ${tab}`,
      description: `You clicked on the ${tab} tab`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">N-Components Library Showcase</h1>
          <p className="text-muted-foreground">Explore all available components in one place</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="n-badge">Default Badge</span>
            <span className="n-badge border-transparent bg-primary/10 text-primary">Primary</span>
            <span className="n-badge border-transparent bg-secondary/10 text-secondary-foreground">Secondary</span>
            <span className="n-badge border-transparent bg-accent/10 text-accent">Accent</span>
            <span className="n-badge border-transparent bg-destructive/10 text-destructive">Destructive</span>
          </div>
        </header>

        <div className="n-card p-6 mb-8">
          <div className="n-tabs-list w-full mb-6">
            <button 
              className="n-tab data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" 
              data-state="active"
              onClick={() => handleTabClick("Overview")}
            >
              Overview
            </button>
            <button 
              className="n-tab" 
              onClick={() => handleTabClick("Components")}
            >
              Components
            </button>
            <button 
              className="n-tab" 
              onClick={() => handleTabClick("Documentation")}
            >
              Documentation
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Input Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Input */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="name"
                    className="n-input pl-10"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    className="n-input pl-10"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Info className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="n-input pl-10 pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">Password must be at least 8 characters</p>
              </div>

              {/* Date Input */}
              <div className="space-y-1">
                <label htmlFor="date" className="block text-sm font-medium">Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="date"
                    type="date"
                    className="n-input pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Range Sliders</h2>
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="block text-sm font-medium">Single Range: {rangeValue[0]}</label>
                <input 
                  type="range"
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                  min="0"
                  max="100"
                  value={rangeValue[0]}
                  onChange={(e) => setRangeValue([parseInt(e.target.value)])}
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="block text-sm font-medium">Multi Range: {multiRangeValue[0]} - {multiRangeValue[1]}</label>
                </div>
                <div className="relative">
                  <input 
                    type="range"
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer absolute"
                    min="0"
                    max="100"
                    value={multiRangeValue[0]}
                    onChange={(e) => setMultiRangeValue([parseInt(e.target.value), multiRangeValue[1]])}
                  />
                  <input 
                    type="range"
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                    min="0"
                    max="100"
                    value={multiRangeValue[1]}
                    onChange={(e) => setMultiRangeValue([multiRangeValue[0], parseInt(e.target.value)])}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Buttons & Dropdowns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <button className="n-button bg-primary text-primary-foreground">Primary Button</button>
              <button className="n-button bg-secondary text-secondary-foreground">Secondary Button</button>
              <button className="n-button bg-accent text-accent-foreground">Accent Button</button>
              <button className="n-button bg-destructive text-destructive-foreground">Destructive Button</button>
              <button className="n-button bg-muted text-muted-foreground">Muted Button</button>
              <div className="relative inline-block">
                <button 
                  className="n-button bg-primary text-primary-foreground flex items-center"
                  onClick={() => toast({ title: "Dropdown", description: "Dropdown would open here" })}
                >
                  Dropdown <ChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Input Groups & Forms</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label htmlFor="searchTerm" className="block text-sm font-medium">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    id="searchTerm"
                    className="n-input pl-10"
                    placeholder="Search..."
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="filter" className="block text-sm font-medium">Filter</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <select
                    id="filter"
                    className="n-input pl-10"
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="notifications" className="block text-sm font-medium">Notification Settings</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <select
                    id="notifications"
                    className="n-input pl-10"
                  >
                    <option value="all">All Notifications</option>
                    <option value="important">Important Only</option>
                    <option value="none">No Notifications</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="preferences" className="block text-sm font-medium">User Preferences</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <select
                    id="preferences"
                    className="n-input pl-10"
                  >
                    <option value="default">Default Settings</option>
                    <option value="custom">Custom Settings</option>
                    <option value="advanced">Advanced Settings</option>
                  </select>
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="n-button bg-primary text-primary-foreground w-full">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link to="/" className="n-button bg-muted text-muted-foreground flex items-center gap-2">
            <Home className="h-4 w-4" /> Home
          </Link>
          <Link to="/register" className="n-button bg-primary text-primary-foreground">
            Registration Example
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;
