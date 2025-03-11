
# N-Range Component

A customizable range slider component with Tailwind CSS styling.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import NRange from 'n-components/n-range';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the component directly
  return (
    <div className="space-y-6">
      <NRange 
        defaultValue={[50]} 
        min={0} 
        max={100} 
        step={1} 
        onValueChange={(value) => console.log(value)}
      />
      
      <NRange 
        defaultValue={[20, 80]} 
        min={0} 
        max={100} 
        step={1} 
        onValueChange={(value) => console.log(value)}
      />
      
      <NRange 
        disabled 
        defaultValue={[30]} 
        min={0} 
        max={100}
      />
      
      <NRange 
        variant="accent" 
        defaultValue={[60]} 
        min={0} 
        max={100}
      />
    </div>
  );
  
  // OR using the plugin's classes
  const n = useNComponents();
  return (
    <div className={n.range}>
      <input 
        type="range" 
        min="0" 
        max="100" 
        defaultValue="50" 
        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer" 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | number[] | [0] | Default value of the slider |
| value | number[] | undefined | Controlled value of the slider |
| min | number | 0 | Minimum value |
| max | number | 100 | Maximum value |
| step | number | 1 | Step increment |
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Slider orientation |
| variant | 'default' \| 'accent' | 'default' | Slider style variant |
| disabled | boolean | false | Whether the slider is disabled |
| onValueChange | function | - | Callback when value changes |
| onValueCommit | function | - | Callback when value commit is triggered (on release) |
| className | string | '' | Additional CSS classes |
| thumbClassName | string | '' | Additional CSS classes for thumb |
| trackClassName | string | '' | Additional CSS classes for track |
| rangeClassName | string | '' | Additional CSS classes for range |

## Customization

You can customize the appearance by extending your Tailwind CSS configuration or passing custom class names.
