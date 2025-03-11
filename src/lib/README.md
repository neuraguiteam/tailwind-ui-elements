
# N-Components Plugin

A modern component library built with Tailwind CSS for React and Vue applications.

## Installation

```bash
npm install n-components
```

## Usage in React

```jsx
// Import the plugin
import NComponents, { useNComponents } from 'n-components';

// In your component
const MyComponent = () => {
  // Get component classes
  const n = useNComponents();
  
  return (
    <div>
      <button className={n.buttonPrimary}>Primary Button</button>
      <span className={n.badgePrimary}>Badge</span>
      {/* Use other components */}
    </div>
  );
};
```

## Usage in Vue

```js
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import NComponents from 'n-components';

const app = createApp(App);
app.use(NComponents); // Install the plugin
app.mount('#app');
```

Then in your Vue components:

```vue
<template>
  <div>
    <button :class="$nComponents.buttonPrimary">Primary Button</button>
    <span :class="$nComponents.badgePrimary">Badge</span>
    <!-- Use other components -->
  </div>
</template>
```

## Available Components

The plugin provides the following component classes:

### Buttons
- `buttonPrimary`: Primary button style
- `buttonSecondary`: Secondary button style
- `buttonOutline`: Outline button style
- `buttonGhost`: Ghost button style
- `buttonDestructive`: Destructive button style

### Badges
- `badgePrimary`: Primary badge style
- `badgeSecondary`: Secondary badge style
- `badgeOutline`: Outline badge style
- `badgeDestructive`: Destructive badge style

### Cards
- `card`: Card container
- `cardHeader`: Card header
- `cardContent`: Card content
- `cardFooter`: Card footer

### Inputs
- `input`: Default input style
- `inputError`: Input with error state
- `inputSuccess`: Input with success state

### Tabs
- `tabsList`: Tabs container
- `tab`: Individual tab
- `tabActive`: Active tab style

### Dropdowns
- `dropdown`: Dropdown container
- `dropdownItem`: Dropdown item

### Range
- `range`: Range input

## Customization

The component styles are based on Tailwind CSS. You can customize the appearance by extending your Tailwind configuration.

## License

MIT
