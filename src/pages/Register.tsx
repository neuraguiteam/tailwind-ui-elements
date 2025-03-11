
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Info, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.terms) {
      newErrors.terms = 'You must agree to terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Registration successful!",
        description: "Your account has been created.",
        variant: "default",
      });
      
      // Normally would send data to backend here
      console.log('Registration data:', formData);
      
      // Redirect to home after registration
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      toast({
        title: "Registration failed",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="n-card w-full max-w-md p-8 space-y-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Create an Account</h1>
          <p className="text-muted-foreground mt-2">Join our community today</p>
        </div>
        
        <div className="n-tabs-list w-full mb-6">
          <button className="n-tab data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" data-state="active">Sign Up</button>
          <button className="n-tab" onClick={() => navigate('/')}>Login</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground">First Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={`n-input pl-10 ${errors.firstName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
            </div>
            
            <div className="space-y-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground">Last Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={`n-input pl-10 ${errors.lastName ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                className={`n-input pl-10 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className={`n-input pl-10 pr-10 ${errors.password ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
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
            {errors.password && <p className="text-destructive text-xs mt-1">{errors.password}</p>}
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <Info className="h-3 w-3" /> Password must be at least 8 characters
            </p>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                className={`n-input pl-10 ${errors.confirmPassword ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {errors.confirmPassword && <p className="text-destructive text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                checked={formData.terms}
                onChange={handleChange}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className={`font-medium ${errors.terms ? 'text-destructive' : 'text-foreground'}`}>
                I agree to the Terms of Service and Privacy Policy
              </label>
              {errors.terms && <p className="text-destructive text-xs mt-1">{errors.terms}</p>}
            </div>
          </div>
          
          <div>
            <button type="submit" className="n-button bg-primary text-primary-foreground w-full py-2.5 rounded-md">
              Create Account
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <a onClick={() => navigate('/')} className="text-accent font-medium cursor-pointer hover:underline">
                Sign in
              </a>
            </p>
          </div>
          
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <button
              type="button"
              className="n-button bg-secondary text-secondary-foreground flex items-center justify-center gap-2"
              onClick={() => toast({ title: "Google Sign In", description: "This would trigger Google authentication" })}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="n-button bg-[#3b5998] text-white flex items-center justify-center gap-2"
              onClick={() => toast({ title: "Facebook Sign In", description: "This would trigger Facebook authentication" })}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
              </svg>
              Facebook
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <span className="n-badge border-transparent bg-primary/10 text-primary hover:bg-primary/20">Modern Design</span>
        <span className="n-badge border-transparent bg-accent/10 text-accent hover:bg-accent/20">Responsive</span>
        <span className="n-badge border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20">Validation</span>
        <span className="n-badge border-transparent bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">Component Library</span>
      </div>
    </div>
  );
};

export default Register;
