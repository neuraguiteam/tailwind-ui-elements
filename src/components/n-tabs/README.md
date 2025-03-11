
# N-Tabs Component

A component for organizing content into selectable tabs with Tailwind CSS styling.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import { NTabs, NTabsList, NTabsTrigger, NTabsContent } from 'n-components/n-tabs';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the components directly
  return (
    <NTabs defaultValue="tab1">
      <NTabsList>
        <NTabsTrigger value="tab1">Tab 1</NTabsTrigger>
        <NTabsTrigger value="tab2">Tab 2</NTabsTrigger>
        <NTabsTrigger value="tab3" disabled>Tab 3 (Disabled)</NTabsTrigger>
      </NTabsList>
      <NTabsContent value="tab1">
        <p>Content for tab 1</p>
      </NTabsContent>
      <NTabsContent value="tab2">
        <p>Content for tab 2</p>
      </NTabsContent>
      <NTabsContent value="tab3">
        <p>Content for tab 3</p>
      </NTabsContent>
    </NTabs>
  );
  
  // OR using the plugin's classes
  const n = useNComponents();
  return (
    <div>
      <div className={n.tabsList}>
        <button className={`${n.tab} data-[state=active]:bg-background data-[state=active]:text-foreground`} data-state="active">Tab 1</button>
        <button className={n.tab}>Tab 2</button>
        <button className={n.tab} disabled>Tab 3</button>
      </div>
      <div className="mt-2">
        <div>Content for tab 1</div>
      </div>
    </div>
  );
}
```

## Components and Props

### NTabs

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| defaultValue | string | '' | The value of the tab that should be active when initially rendered |
| value | string | undefined | The controlled value of the tab to activate |
| onValueChange | function | - | Callback called when the value changes |
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | The orientation of the component |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Tab components |

### NTabsList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Tab trigger buttons |
| loop | boolean | true | Whether keyboard navigation should loop from last tab to first and vice versa |

### NTabsTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | A unique value for the tab |
| disabled | boolean | false | Whether the tab is disabled |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Tab trigger content |

### NTabsContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | A unique value that associates the content with a tab |
| forceMount | boolean | false | Force mounting when not active |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Tab content |

## Customization

You can customize the appearance by extending your Tailwind CSS configuration or passing custom class names to each component.
