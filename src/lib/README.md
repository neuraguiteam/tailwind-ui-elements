# N-Components Library

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

// Alternatively, import individual components
import { NButton, NBadge, NCard } from 'n-components';

const AnotherComponent = () => {
  return (
    <div>
      <NButton variant="primary">Primary Button</NButton>
      <NBadge variant="secondary">Secondary Badge</NBadge>
      <NCard>
        <h3>Card Title</h3>
        <p>Card content</p>
      </NCard>
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

The library provides the following components:

### Components
- `NButton`: Button component with various styles
- `NBadge`: Badge component for labels and tags
- `NCard`: Card container with header, content, and footer
- `NInput`: Input component with validation states
- `NInputGroup`: Component for grouping inputs with labels
- `NTabs`: Tabs for organizing content
- `NDropdown`: Dropdown menu for contextual actions
- `NRange`: Range slider component

### CSS Classes
The plugin also provides the following component classes:

#### Buttons
- `buttonPrimary`: Primary button style
- `buttonSecondary`: Secondary button style
- `buttonOutline`: Outline button style
- `buttonGhost`: Ghost button style
- `buttonDestructive`: Destructive button style

#### Badges
- `badgePrimary`: Primary badge style
- `badgeSecondary`: Secondary badge style
- `badgeOutline`: Outline badge style
- `badgeDestructive`: Destructive badge style

#### Cards
- `card`: Card container
- `cardHeader`: Card header
- `cardContent`: Card content
- `cardFooter`: Card footer

#### Inputs
- `input`: Default input style
- `inputError`: Input with error state
- `inputSuccess`: Input with success state

#### Tabs
- `tabsList`: Tabs container
- `tab`: Individual tab
- `tabActive`: Active tab style

#### Dropdowns
- `dropdown`: Dropdown container
- `dropdownItem`: Dropdown item

#### Range
- `range`: Range input

## Customization

The component styles are based on Tailwind CSS. You can customize the appearance by extending your Tailwind configuration or applying custom classes to components.

## Configuration

To customize the components globally, you can modify your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F1F5F9',
          foreground: '#1E293B',
        },
        // Add more color customizations
      },
      borderRadius: {
        // Customize border radius
      },
      // Other customizations
    },
  },
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
