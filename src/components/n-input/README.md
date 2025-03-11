
# N-Input Component

A customizable input component for form elements with Tailwind CSS styling.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import NInput from 'n-components/n-input';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the component directly
  return (
    <div className="space-y-4">
      <NInput placeholder="Default input" />
      <NInput variant="outline" placeholder="Outline input" />
      <NInput variant="filled" placeholder="Filled input" />
      <NInput state="error" placeholder="Error state" />
      <NInput state="success" placeholder="Success state" />
      <NInput size="sm" placeholder="Small input" />
      <NInput size="lg" placeholder="Large input" />
      <NInput disabled placeholder="Disabled input" />
      <NInput type="password" placeholder="Password input" />
      <NInput type="number" placeholder="Number input" />
      <NInput leftIcon={<SearchIcon />} placeholder="With left icon" />
      <NInput rightIcon={<CheckIcon />} placeholder="With right icon" />
    </div>
  );
  
  // OR using the plugin's classes
  const n = useNComponents();
  return (
    <div className="space-y-4">
      <input className={n.input} placeholder="Default input" />
      <input className={n.inputError} placeholder="Input with error" />
      <input className={n.inputSuccess} placeholder="Input with success" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'outline' \| 'filled' | 'default' | Input style variant |
| size | 'default' \| 'sm' \| 'lg' | 'default' | Input size |
| state | 'default' \| 'error' \| 'success' | 'default' | Input validation state |
| leftIcon | ReactNode | null | Icon to display on the left side |
| rightIcon | ReactNode | null | Icon to display on the right side |
| className | string | '' | Additional CSS classes |
| disabled | boolean | false | Disables the input |
| type | string | 'text' | HTML input type |
| placeholder | string | '' | Input placeholder text |
| value | string | '' | Input value |
| onChange | function | - | Change handler |
| onFocus | function | - | Focus handler |
| onBlur | function | - | Blur handler |

## Customization

You can customize the appearance by extending your Tailwind CSS configuration or passing custom class names.
