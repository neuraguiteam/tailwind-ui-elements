
// n-components plugin for React/Vue applications

import '../index.css'; // Import the Tailwind CSS styles

// Export all the component classes for easy usage
export const componentClasses = {
  // Buttons
  button: 'n-button',
  buttonPrimary: 'n-button bg-primary text-primary-foreground',
  buttonSecondary: 'n-button bg-secondary text-secondary-foreground',
  buttonOutline: 'n-button border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  buttonGhost: 'n-button hover:bg-accent hover:text-accent-foreground',
  buttonDestructive: 'n-button bg-destructive text-destructive-foreground',
  
  // Badges
  badge: 'n-badge',
  badgePrimary: 'n-badge border-transparent bg-primary text-primary-foreground',
  badgeSecondary: 'n-badge border-transparent bg-secondary text-secondary-foreground',
  badgeOutline: 'n-badge',
  badgeDestructive: 'n-badge border-transparent bg-destructive text-destructive-foreground',
  
  // Cards
  card: 'n-card',
  cardHeader: 'px-6 py-4',
  cardContent: 'px-6 py-4',
  cardFooter: 'px-6 py-4 flex justify-end',
  
  // Inputs
  input: 'n-input',
  inputError: 'n-input border-destructive focus-visible:ring-destructive',
  inputSuccess: 'n-input border-green-500 focus-visible:ring-green-500',
  
  // Tabs
  tabsList: 'n-tabs-list',
  tab: 'n-tab',
  tabActive: 'n-tab data-[state=active]:bg-background data-[state=active]:text-foreground',
  
  // Dropdowns
  dropdown: 'n-dropdown',
  dropdownItem: 'n-dropdown-item',
  
  // Range
  range: 'n-range',
};

// Plugin installation function for Vue
const installVue = (app: any) => {
  // Add global properties that can be accessed in all components
  app.config.globalProperties.$nComponents = componentClasses;
  
  // Provide the component classes to the Vue application
  app.provide('nComponents', componentClasses);
};

// Function to register the plugin with React applications
const useNComponents = () => {
  return componentClasses;
};

// Export the plugin for both Vue and React
export default {
  // For Vue applications
  install: (app: any) => installVue(app),
  
  // For React applications
  useNComponents,
  componentClasses,
};

// Allow direct export of individual components
export { componentClasses as nComponents, useNComponents };
