### Prop Drilling

**Prop drilling** is the process of passing props down through multiple layers of nested components, even if the intermediate components don't need the props themselves. They just act as carriers to pass the data to a deeply nested child.

**Analogy:** Imagine you need to pass a message from a General to a specific soldier in the field. Instead of having a direct radio, the General tells a Colonel, who tells a Major, who tells a Captain, who finally tells the soldier. The Colonel, Major, and Captain didn't need the message, but they had to waste their time passing it along.

This makes your code:

- **Harder to maintain:** If you need to change the prop, you have to edit every component in the chain.
- **Less readable:** Intermediate components have props that have nothing to do with their own logic.
- **Tightly coupled:** Components are less reusable because they are burdened with passing irrelevant props.

---

### The Context API

The **Context API** is React's built-in solution to avoid prop drilling. It allows you to share data that can be considered "global" for a tree of React components, without having to pass props down manually at every level.

**Analogy:** Instead of the chain of messengers, Context is like a **public announcement system** for your app. A component can broadcast a value, and any other component in the tree below it can "tune in" and listen for that value directly.

Using Context is a two-step process:

#### Step A: Create the Context

First, you create a Context object using `React.createContext()`. This object will hold your shared data.

```javascript
// src/contexts/UserContext.js
import { createContext } from 'react';

// You can pass a default value, often null or an initial state.
const UserContext = createContext(null);

export default UserContext;
```

#### Step B: Provide the Context

Every Context object comes with a special component called a **Provider**. You wrap a parent component with this `Provider` and give it a `value` prop. This `value` is the data you want to make available to all components inside the Provider.

```jsx
// src/App.jsx
import UserContext from './contexts/UserContext';
import Dashboard from './components/Dashboard';

function App() {
  const currentUser = { name: 'Ganesh', theme: 'dark' };

  return (
    // Wrap the component tree with the Provider
    // The 'value' prop is the data being broadcasted
    <UserContext.Provider value={currentUser}>
      <Dashboard />
    </UserContext.Provider>
  );
}
```

Now, any component inside `<Dashboard />` can access `currentUser` without it being passed as a prop.

---

### The Modern Way: The `useContext` Hook

So, how does a deeply nested component "listen" for the value? The modern and simple way is with the **`useContext` Hook**.

The `useContext` Hook takes one argument—the Context object you created—and returns the `value` that was provided by the nearest `Provider` up the tree.

#### Practical Example: Tying It All Together

Let's see how our deeply nested `<Avatar />` component can now get the `user` data directly.

**1. Create the Context (as above)**
`src/contexts/UserContext.js`

**2. Provide the Context (as above)**
`src/App.jsx`

**3. Consume the Context with `useContext`**
Now, the intermediate components are clean.

```jsx
// src/components/UserProfile.jsx
import Avatar from './Avatar';

// Notice: No user prop is needed here anymore!
function UserProfile() {
  return (
    <div>
      <Avatar />
    </div>
  );
}
```

And the child component gets the data directly.

```jsx
// src/components/Avatar.jsx
import { useContext } from 'react';
import UserContext from '../contexts/UserContext'; // Import the context

function Avatar() {
  // Use the useContext Hook to get the value
  const user = useContext(UserContext);

  if (!user) return null;

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Your theme is: {user.theme}</p>
    </div>
  );
}
```

And that's it\! The `<Avatar />` component reached directly into the "public announcement system" and got the data it needed. The intermediate components are now clean and reusable.
