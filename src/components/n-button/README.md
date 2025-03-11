
# N-Button Component

A customizable button component for React applications with Tailwind CSS styling.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import NButton from 'n-components/n-button';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the component directly
  return (
    <div>
      <NButton variant="primary">Primary Button</NButton>
      <NButton variant="secondary">Secondary Button</NButton>
      <NButton variant="outline">Outline Button</NButton>
      <NButton variant="ghost">Ghost Button</NButton>
      <NButton variant="destructive">Destructive Button</NButton>
      <NButton size="sm">Small Button</NButton>
      <NButton size="lg">Large Button</NButton>
      <NButton disabled>Disabled Button</NButton>
    </div>
  );
  
  // OR using the plugin's classes
  const n = useNComponents();
  return (
    <div>
      <button className={n.buttonPrimary}>Primary Button</button>
      <button className={n.buttonSecondary}>Secondary Button</button>
      <button className={n.buttonOutline}>Outline Button</button>
      <button className={n.buttonGhost}>Ghost Button</button>
      <button className={n.buttonDestructive}>Destructive Button</button>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'primary' \| 'secondary' \| 'destructive' \| 'outline' \| 'ghost' | 'default' | Button style variant |
| size | 'default' \| 'sm' \| 'lg' \| 'icon' | 'default' | Button size |
| asChild | boolean | false | Merge props onto child |
| className | string | '' | Additional CSS classes |
| disabled | boolean | false | Disables the button |
| children | ReactNode | - | Button content |
| onClick | function | - | Click handler |

## Customization

You can customize the appearance by extending your Tailwind CSS configuration or passing custom class names.
