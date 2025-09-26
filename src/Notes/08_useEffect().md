### What are Side Effects in React?

A React component's main job is to take in props and state and return JSX that describes the UI. This process is called **rendering**.

A **side effect** is any operation that interacts with the "outside world"—anything that isn't directly related to calculating and returning JSX.

Common examples of side effects include:

- Fetching data from an API.
- Manually changing the DOM (e.g., updating the document title).
- Setting up a timer with `setInterval` or a subscription.
- Reading from or writing to `localStorage`.

You can't perform these actions directly inside the main body of your component, because it would cause unpredictable behavior and run on every single render. You need a safe place to run them, and that place is `useEffect`.

---

### The `useEffect` Hook

The `useEffect` Hook provides a way to run side effects in your functional components. It tells your component to **do something _after_ it has rendered**.

To use it, you must first import it from React:

```javascript
import { useEffect } from 'react';
```

#### The Syntax

`useEffect` accepts two arguments: a function (the "effect") and an optional dependency array.

```jsx
useEffect(() => {
  // This is the "effect function". Your side effect logic goes here.
  // For example: fetch('https://api.example.com/data');
}, [dependencyArray]);
```

1.  **The Effect Function:** This function contains your side effect code. React will run this function for you _after_ the component has rendered to the DOM.
2.  **The Dependency Array:** This is the most important part. It's an array of props or state values that the effect "depends" on. This array tells React **when** to re-run the effect.

---

### The Dependency Array: Controlling When the Effect Runs

The dependency array is the key to controlling the behavior of `useEffect`. There are three main patterns:

#### Pattern 1: Run Once (Empty Array `[]`)

The effect runs **only one time**, right after the component's initial render. It will not run again on subsequent re-renders.

- **Use Case:** This is the perfect pattern for fetching initial data that the component needs to display.

<!-- end list -->

```jsx
useEffect(() => {
  console.log('Component has mounted!');
  // Fetch data here...
}, []); // Empty array means run only once.
```

#### Pattern 2: Run on Change (Array with Dependencies `[prop, state]`)

The effect runs after the initial render **and** any time a value inside the dependency array changes.

- **Use Case:** When you need to re-fetch data because a prop or state has changed (e.g., a user clicks a new profile, and the `userId` prop changes).

<!-- end list -->

```jsx
useEffect(() => {
  // Re-fetch data whenever `userId` changes
  fetch(`https://api.example.com/users/${userId}`);
}, [userId]); // Dependency: re-run if `userId` changes.
```

#### Pattern 3: Run on Every Render (No Array)

If you omit the dependency array completely, the effect will run after **every single render**.

- **Use Case:** This is rare and can easily lead to performance issues or infinite loops. Use it with extreme caution.

---

### Practical Example: Fetching Data

This component fetches a user's data from an API when it first mounts.

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchUserData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };

    fetchUserData();
  }, [userId]); // Effect depends on userId. It re-runs if userId changes.

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
```

---

### The Cleanup Function

Sometimes, an effect needs to be "cleaned up" before the component is removed from the screen to prevent memory leaks. For example, if you set up a timer with `setInterval`, you need to clear it with `clearInterval`.

To do this, you can **return a function** from your effect. React will run this cleanup function just before the component unmounts, or before the effect runs again.

```jsx
useEffect(() => {
  const timerId = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Return a cleanup function
  return () => {
    console.log('Cleaning up the timer!');
    clearInterval(timerId); // Clear the interval
  };
}, []);
```
