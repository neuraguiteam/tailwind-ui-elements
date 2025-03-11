
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-secondary/5 p-4">
      <div className="n-card max-w-md w-full p-8 space-y-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Welcome to N-Components</h1>
          <p className="text-muted-foreground mt-2">A modern component library for React and Vue</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => toast({ 
              title: "Component Library", 
              description: "A suite of reusable UI components based on Tailwind CSS"
            })}
            className="n-button bg-primary text-primary-foreground w-full py-2.5 rounded-md"
          >
            Explore Components
          </button>

          <Link to="/register" className="n-button bg-secondary text-secondary-foreground w-full py-2.5 rounded-md flex items-center justify-center">
            Register Now
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="n-badge border-transparent bg-primary/10 text-primary hover:bg-primary/20">Modern</span>
          <span className="n-badge border-transparent bg-accent/10 text-accent hover:bg-accent/20">Responsive</span>
          <span className="n-badge border-transparent bg-secondary/10 text-secondary-foreground hover:bg-secondary/20">Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
