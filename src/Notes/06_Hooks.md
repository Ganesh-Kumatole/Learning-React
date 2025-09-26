### Hooks: Let's Hook into React Features

**Hooks** are special JavaScript functions that let you "hook into" React's features from within your **functional components**.

Before Hooks, features like state and managing a component's lifecycle (e.g., running code when the component first appears or disappears) were only available in more complex **class components**. Hooks allow you to use these powerful features in simpler, cleaner functional components.

All Hooks follow a naming convention: they always start with the word **`use`**.

---

### The Two Golden Rules of Hooks

React has two strict rules for using Hooks. Following them prevents many common bugs. Your linter (ESLint) will typically warn you if you break them.

1.  **✅ Only Call Hooks at the Top Level**
    You must call Hooks at the top level of your React function, before any `return` statement. **Do not** call Hooks inside loops, conditions (`if` statements), or nested functions.

    - **Why?** React relies on the **order** in which Hooks are called to associate state with the correct component between re-renders. Calling them conditionally would change this order and break your application.

    <!-- end list -->

    ```jsx
    // GOOD ✅
    function MyComponent() {
      const [name, setName] = useState(''); // Top level
      useEffect(() => { ... });             // Top level
      return <div>...</div>;
    }

    // BAD ❌
    function MyComponent({ hasError }) {
      if (hasError) {
        // Don't call a Hook inside a condition!
        const [error, setError] = useState(null);
      }
      return <div>...</div>;
    }
    ```

2.  **✅ Only Call Hooks from React Functions**
    You should only call Hooks from:

    - A React functional component.
    - A custom Hook (which you can create yourself).

    You should **not** call Hooks from regular JavaScript functions.

---

### The Most Common Hooks

Here are the essential Hooks you will use most often.

#### 1\. `useState`

- **Purpose:** To declare a **state variable** that your component can remember.
- **When to Use:** Whenever a component needs to keep track of data that changes over time and should trigger a re-render when it does. (e.g., form inputs, a counter, toggling a modal).
- **Syntax:** `const [state, setState] = useState(initialValue);`

#### 2\. `useEffect`

- **Purpose:** To perform **side effects** in your components. A side effect is any code that affects something outside of the component itself.

- **When to Use:** For common tasks like:

  - Fetching data from an API when the component loads.
  - Setting up timers or subscriptions.
  - Manually changing the DOM.

- **Syntax:** `useEffect(() => { /* code to run */ }, [dependencies]);`

- **The Dependency Array `[]` is crucial:**

  - `[]` (empty): The effect runs **only once**, after the component's initial render. Perfect for initial data fetching.
  - `[prop, state]` (with values): The effect runs after the initial render **and** any time one of the dependency values changes.
  - No array (omitted): The effect runs after **every single render**. Use this with caution as it can cause infinite loops.

  <!-- end list -->

  ```jsx
  import { useState, useEffect } from 'react';

  function UserData({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      // This function is the "effect"
      fetch(`https://api.example.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }, [userId]); // Dependency: Re-run effect if userId changes

    if (!user) return <div>Loading...</div>;
    return <div>Hello, {user.name}</div>;
  }
  ```

#### 3\. `useContext`

- **Purpose:** To consume data from a React "Context," allowing you to share state across the entire component tree without having to pass props down manually through every level (a problem known as "prop drilling").
- **When to Use:** For sharing global data like the current authenticated user, UI theme (e.g., dark/light mode), or preferred language.

#### 4\. `useRef`

- **Purpose:** Provides a way to hold a mutable value that does **not** cause a re-render when it changes.
- **When to Use:**
  1.  **Accessing DOM elements directly:** For example, to focus an input field when a page loads.
  2.  **Storing a value that persists between renders:** Like a timer ID from `setTimeout`, without triggering a UI update.

---

### Custom Hooks

You can combine existing Hooks to create your own **custom Hooks**. This is a powerful feature for extracting and reusing stateful logic. For example, you could create a `useFetch` hook that contains all the logic for fetching data, including loading and error states, and then reuse it in any component that needs to fetch data.
