
# N-Card Component

A flexible card component for presenting content in a contained box with Tailwind CSS styling.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import { NCard, NCardHeader, NCardContent, NCardFooter, NCardTitle, NCardDescription } from 'n-components/n-card';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the components directly
  return (
    <NCard>
      <NCardHeader>
        <NCardTitle>Card Title</NCardTitle>
        <NCardDescription>Card Description</NCardDescription>
      </NCardHeader>
      <NCardContent>
        <p>This is the main content of the card.</p>
      </NCardContent>
      <NCardFooter>
        <button>Action</button>
      </NCardFooter>
    </NCard>
  );
  
  // OR using the plugin's classes
  const n = useNComponents();
  return (
    <div className={n.card}>
      <div className={n.cardHeader}>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground">Card Description</p>
      </div>
      <div className={n.cardContent}>
        <p>This is the main content of the card.</p>
      </div>
      <div className={n.cardFooter}>
        <button>Action</button>
      </div>
    </div>
  );
}
```

## Components and Props

### NCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Card content |

### NCardHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Header content |

### NCardTitle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Title content |
| as | ElementType | 'h3' | HTML element to render as |

### NCardDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Description content |

### NCardContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Main content |

### NCardFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Footer content |

## Customization

You can customize the appearance by extending your Tailwind CSS configuration or by passing custom class names to each component.
