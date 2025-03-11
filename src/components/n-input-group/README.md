
# N-Input-Group Component

A component for grouping inputs with labels, help text, and validation messages.

## Installation

```bash
npm install n-components
```

## Usage

```jsx
import { NInputGroup, NInputLabel, NInputHelp, NInputError } from 'n-components/n-input-group';
import NInput from 'n-components/n-input';
// OR using the plugin
import { useNComponents } from 'n-components';

function MyComponent() {
  // Using the components directly
  return (
    <div className="space-y-4">
      <NInputGroup>
        <NInputLabel htmlFor="username">Username</NInputLabel>
        <NInput id="username" placeholder="Enter username" />
        <NInputHelp>Your unique username for the account</NInputHelp>
      </NInputGroup>
      
      <NInputGroup error>
        <NInputLabel htmlFor="email">Email</NInputLabel>
        <NInput id="email" state="error" placeholder="Enter email" />
        <NInputError>Please enter a valid email address</NInputError>
      </NInputGroup>
      
      <NInputGroup success>
        <NInputLabel htmlFor="password">Password</NInputLabel>
        <NInput id="password" state="success" type="password" placeholder="Enter password" />
        <NInputHelp>Password strength: Strong</NInputHelp>
      </NInputGroup>
    </div>
  );
  
  // There are no specific plugin classes for input groups as they're composed of other elements
}
```

## Components and Props

### NInputGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Input group content |
| error | boolean | false | Whether the input has an error |
| success | boolean | false | Whether the input is successful |

### NInputLabel

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Label content |
| htmlFor | string | '' | ID of the associated input |
| required | boolean | false | Whether to show required indicator |

### NInputHelp

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Help text content |

### NInputError

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | '' | Additional CSS classes |
| children | ReactNode | - | Error message content |

## Customization

You can customize the appearance by extending your Tailwind CSS configuration or passing custom class names to each component.
