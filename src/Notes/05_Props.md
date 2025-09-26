### Props in React (Properties)

**Props** (short for "properties") are the way you pass data from a **parent** component down to a **child** component.

Think of it like this: if components are JavaScript functions, then props are the **arguments** you pass to those functions. They allow you to customize a component's output, making it reusable and dynamic instead of static.

---

### How to Pass and Receive Props

The process involves two steps: the parent component _gives_ the props, and the child component _receives_ them.

#### Step 1: Passing Props from the Parent

You pass props to a child component by adding them as attributes, just like you would with a standard HTML tag.

Let's imagine we want our `UserProfile` component to be reusable. Instead of having the user's data hardcoded inside it, we'll pass the data down from our main `App` component.

**In the Parent Component (`App.jsx`):**
Here, we render the `<UserProfile />` and add props named `name`, `role`, and `imageUrl` with their corresponding values.

```jsx
// src/App.jsx
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div>
      <h1>Our Team</h1>
      <UserProfile
        name="Ganesh Kumatole"
        role="Software Developer"
        imageUrl="https://i.imgur.com/YfeOqp2.png"
      />
      <UserProfile
        name="Jane Doe"
        role="Product Designer"
        imageUrl="https://i.imgur.com/Q9qFtL2.png"
      />
    </div>
  );
}

export default App;
```

#### Step 2: Receiving and Using Props in the Child

The child component receives all these attributes in a single object as its first function argument. By convention, this object is called **`props`**.

You can then access the data using dot notation (e.g., `props.name`) or, more commonly, by **destructuring** the props object in the function's parameters. Destructuring is cleaner and is the modern standard.

**In the Child Component (`UserProfile.jsx`):**

```jsx
// src/components/UserProfile.jsx

// We are destructuring the props object directly in the function signature
function UserProfile({ name, role, imageUrl }) {
  return (
    <div className="user-profile">
      <img src={imageUrl} alt={'Photo of ' + name} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default UserProfile;
```

Now, the `UserProfile` component is fully dynamic\! As you can see in the `App.jsx` example, we can reuse it to display different users just by passing different props.

---

### The Most Important Rule: Props are Read-Only Immutable

This is a core principle of React. A component must **never** modify its own props. They are **read-only**.

- **Why?** React has a "one-way data flow." Data flows down from parent to child. If a child could change its props, it would affect the parent, making your application's data flow unpredictable and hard to debug.
- **Analogy:** Think of props as a gift. A parent gives a gift (props) to a child. The child can use and look at the gift, but it shouldn't try to change the gift itself.

If a component needs to manage data that _will change_ over time (like a counter or user input in a form), it must use **state**, which is the next major concept you'll learn.
