
# N-Badge Component

A flexible badge component for highlighting status, labels, or counts with Tailwind CSS styling.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import NBadge from 'n-components/n-badge';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the component directly
  return (
    <div className="space-x-2">
      <NBadge>Default</NBadge>
      <NBadge variant="secondary">Secondary</NBadge>
      <NBadge variant="destructive">Destructive</NBadge>
      <NBadge variant="outline">Outline</NBadge>
      <NBadge variant="accent">Accent</NBadge>
      <NBadge size="sm">Small</NBadge>
      <NBadge size="lg">Large</NBadge>
      <NBadge pill={false}>Rounded</NBadge>
      <NBadge dot>With Dot</NBadge>
      <NBadge dot dotColor="bg-green-500">Custom Dot</NBadge>
      <NBadge textVariant="uppercase">UPPERCASE</NBadge>
    </div>
  );
  
  // OR using the plugin's classes
  const n = useNComponents();
  return (
    <div className="space-x-2">
      <span className={n.badgePrimary}>Primary Badge</span>
      <span className={n.badgeSecondary}>Secondary Badge</span>
      <span className={n.badgeOutline}>Outline Badge</span>
      <span className={n.badgeDestructive}>Destructive Badge</span>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'accent' | 'default' | Badge style variant |
| size | 'default' \| 'sm' \| 'lg' | 'default' | Badge size |
| pill | boolean | true | Whether to use pill shape (rounded-full) |
| textVariant | 'uppercase' \| 'lowercase' \| 'capitalize' \| 'normal-case' | 'normal-case' | Text transformation |
| dot | boolean | false | Whether to show a dot indicator |
| dotColor | string | '' | Custom color class for the dot |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Badge content |

## Customization

The badge styles can be customized through your Tailwind CSS configuration or by passing custom class names.
