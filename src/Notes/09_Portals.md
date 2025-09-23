# React Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

## What are Portals and Why Use Them?

Normally, when you render a component, its HTML is placed inside its parent's HTML in the DOM tree. This is usually what you want.

However, sometimes a component needs to visually "break out" of its container. The most common examples are:

- Modals
- Tooltips
- Pop-up dialogs

### The Problem

Imagine you have a modal component nested deep inside your application. The parent containers might have CSS styles like `overflow: hidden` or a specific `z-index`. These styles can trap your modal, clipping it or hiding it behind other elements, making it impossible to display correctly over the entire page.

### The Solution: Portals

Portals solve this problem by providing a kind of "wormhole" for your component. You can render the modal component in your React tree like normal, but its actual HTML will be placed in a different, higher-level location in the DOM, like directly under the `<body>` tag.

This frees the modal from the CSS constraints of its parent components, while still allowing it to behave like a normal React component in terms of props and state.

## How to Use Portals

Using a portal is a two-step process.

### Step 1: Prepare the HTML

First, you need a target DOM node in your main `public/index.html` file. This node will be the "exit point" for your portal. It's separate from your main app root (`<div id="root"></div>`).

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

### Step 2: Use ReactDOM.createPortal()

React provides a function called `createPortal` from the `react-dom` library.

#### Syntax:

```javascript
import { createPortal } from 'react-dom';

return createPortal(child, container);
```

Parameters:

- `child`: The JSX you want to render (e.g., your modal's div)
- `container`: The raw DOM element where you want to render it (e.g., `document.getElementById('modal-root')`)

## Practical Example: A Modal Component

Here's how you'd build a modal using a portal:

```javascript
// src/components/Modal.jsx
import { createPortal } from 'react-dom';
import './Modal.css'; // Add some basic styling for the modal

// Find the portal container in the DOM
const modalRoot = document.getElementById('modal-root');

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  // Use the portal to render the modal's content into the 'modal-root' div
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
```

## Event Bubbling Through Portals

Here's a key feature: Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way, including event bubbling.

An event fired from inside a portal will propagate up to its ancestors in the React component tree, even if those ancestors are not its ancestors in the DOM tree.

This means you can have a parent component that handles events from a child rendered in a portal, just as you would with a normal child component. This makes portals feel seamless and integrated.
