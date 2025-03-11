
import React from 'react';
import { useNComponents } from '../lib/n-components-plugin';

const ReactUsageExample = () => {
  // Import component classes from our plugin
  const n = useNComponents();
  
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold">React Usage Example</h2>
      
      {/* Using button components */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <button className={n.buttonPrimary}>Primary Button</button>
          <button className={n.buttonSecondary}>Secondary Button</button>
          <button className={n.buttonOutline}>Outline Button</button>
          <button className={n.buttonGhost}>Ghost Button</button>
          <button className={n.buttonDestructive}>Destructive Button</button>
        </div>
      </div>
      
      {/* Using badge components */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Badges</h3>
        <div className="flex flex-wrap gap-2">
          <span className={n.badgePrimary}>Primary Badge</span>
          <span className={n.badgeSecondary}>Secondary Badge</span>
          <span className={n.badgeOutline}>Outline Badge</span>
          <span className={n.badgeDestructive}>Destructive Badge</span>
        </div>
      </div>
      
      {/* Using card component */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Card</h3>
        <div className={n.card}>
          <div className={n.cardHeader}>
            <h4 className="text-lg font-semibold">Card Title</h4>
          </div>
          <div className={n.cardContent}>
            <p>This is a card component from our N-Components library.</p>
          </div>
          <div className={n.cardFooter}>
            <button className={n.buttonPrimary}>Action</button>
          </div>
        </div>
      </div>
      
      {/* Using input components */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Inputs</h3>
        <div className="space-y-2 max-w-md">
          <input className={n.input} placeholder="Default input" />
          <input className={n.inputError} placeholder="Error input" />
          <input className={n.inputSuccess} placeholder="Success input" />
        </div>
      </div>
      
      {/* Using tabs components */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Tabs</h3>
        <div className={n.tabsList}>
          <button className={`${n.tab} ${n.tabActive}`} data-state="active">Tab 1</button>
          <button className={n.tab}>Tab 2</button>
          <button className={n.tab}>Tab 3</button>
        </div>
      </div>
    </div>
  );
};

export default ReactUsageExample;
