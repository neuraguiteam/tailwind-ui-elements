
# N-Dropdown Component

A dropdown menu component for displaying contextual actions with Tailwind CSS styling.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import { NDropdown, NDropdownTrigger, NDropdownContent, NDropdownItem, NDropdownSeparator } from 'n-components/n-dropdown';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the components directly
  return (
    <NDropdown>
      <NDropdownTrigger>
        <button>Open Dropdown</button>
      </NDropdownTrigger>
      <NDropdownContent>
        <NDropdownItem onSelect={() => console.log('New')}>New</NDropdownItem>
        <NDropdownItem onSelect={() => console.log('Open')}>Open</NDropdownItem>
        <NDropdownSeparator />
        <NDropdownItem onSelect={() => console.log('Save')}>Save</NDropdownItem>
        <NDropdownItem disabled onSelect={() => console.log('Delete')}>Delete</NDropdownItem>
      </NDropdownContent>
    </NDropdown>
  );
  
  // OR using the plugin's classes
  const n = useNComponents();
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>Open Dropdown</button>
      {isOpen && (
        <div className={n.dropdown}>
          <div className={n.dropdownItem}>New</div>
          <div className={n.dropdownItem}>Open</div>
          <div className="border-t border-border my-1"></div>
          <div className={n.dropdownItem}>Save</div>
          <div className={`${n.dropdownItem} opacity-50 pointer-events-none`}>Delete</div>
        </div>
      )}
    </div>
  );
}
```

## Components and Props

### NDropdown

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | undefined | Controlled open state |
| defaultOpen | boolean | false | Initial open state |
| onOpenChange | function | - | Callback when open state changes |
| modal | boolean | true | Whether to use a modal behavior |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Dropdown components |

### NDropdownTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | false | Merge props onto child |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Trigger element |

### NDropdownContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| sideOffset | number | 4 | Distance in pixels from the trigger |
| align | 'start' \| 'center' \| 'end' | 'center' | Alignment of the dropdown |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | Side to render the dropdown |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Dropdown content |

### NDropdownItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onSelect | function | - | Callback when item is selected |
| disabled | boolean | false | Whether the item is disabled |
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Item content |

### NDropdownSeparator

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |

## Customization

You can customize the appearance by extending your Tailwind CSS configuration or passing custom class names to each component.
