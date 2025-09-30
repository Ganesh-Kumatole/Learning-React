### What is a Custom Hook?

A **Custom Hook** is a reusable JavaScript function whose name starts with the word **`use`** and that can call other Hooks (like `useState`, `useEffect`, etc.).

They are not a new feature; they are a design pattern that leverages the power of existing Hooks to let you extract and share **stateful logic** between components.

#### The Problem They Solve: Code Duplication

As you build an application, you'll often find yourself writing the same stateful logic over and over in different components. For example:

- Fetching data from an API, including managing loading and error states.
- Subscribing to browser events (like window size or online status).
- Managing complex form state.

Copying and pasting this logic makes your code messy and hard to maintain. Custom Hooks allow you to extract this logic into a single, clean, reusable function.

**Analogy:** Instead of building a new measuring tape and pencil (`useState` and `useEffect`) every time you need to mark a piece of wood, you create a single, custom "marking tool" (`useMarker`) that contains both.

---

### The Rules of Creating a Custom Hook

There are two simple but essential rules:

1.  **Name Must Start with `use`**: This is a critical convention. It allows React's linter to recognize it as a Hook and automatically check for violations of the Rules of Hooks (e.g., ensuring you don't call it conditionally). Examples: `useFetch`, `useToggle`, `useLocalStorage`.

2.  **It Can Call Other Hooks**: This is what makes them so powerful. Inside a custom hook, you can use `useState`, `useEffect`, `useContext`, or even other custom hooks.

---

### Practical Example: A `useFetch` Hook

Let's build the most common custom hook: one that fetches data from an API and manages the loading and error states.

#### Step 1: Create the Custom Hook (`useFetch.js`)

This function will take a URL, handle the entire fetch lifecycle, and return the final state.

```javascript
// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  // State for the data, loading status, and any errors
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect if the URL changes

  // Return the state for the component to use
  return { data, loading, error };
}

export default useFetch;
```

#### Step 2: Use the Custom Hook in a Component

Now, any component can use this hook to fetch data with just one line of code. The component itself becomes incredibly simple and declarative.

```jsx
// src/components/UserProfile.jsx
import useFetch from '../hooks/useFetch';

function UserProfile({ userId }) {
  // All the complex fetch logic is hidden inside our custom hook!
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
    </div>
  );
}
```

### Key Takeaways

- Custom Hooks are for **reusing stateful logic**, not state itself. Every component that calls a custom hook gets its own independent state.
- They help you write cleaner, more readable components by separating complex logic from the UI description.
