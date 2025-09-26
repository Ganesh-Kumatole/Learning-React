### Components: The Building Blocks of React

**Components** are the heart and soul of React. They are independent, reusable pieces of code that return a chunk of JSX to describe a part of the user interface.

Think of a webpage as a set of LEGO bricks. Each brick (a button, a search bar, a user profile) is a **component**. You can build simple components and then assemble them to create more complex components, and ultimately, your entire application.

#### Core Characteristics of Components

- **Reusability:** You can write a component once (e.g., a `CustomButton`) and then use it in many different places throughout your application, saving you from writing duplicate code.
- **Isolation:** Each component manages its own logic, state, and markup. This makes your code highly organized and much easier to debug. A change in one component won't accidentally break another one.

#### Creating a Functional Component

The modern and standard way to create a component in React is by writing a JavaScript function. A valid component function:

1.  **Is a plain JavaScript function.**
2.  **Its name must start with a capital letter** (e.g., `Welcome`, not `welcome`). This is how React distinguishes components from regular HTML tags.
3.  **It returns JSX.**

Here’s an example of a simple `UserProfile` component saved in a file named `UserProfile.jsx`:

```jsx
// src/components/UserProfile.jsx

function UserProfile() {
  const user = {
    name: 'Ganesh Kumatole',
    role: 'Software Developer',
    imageUrl: 'https://i.imgur.com/YfeOqp2.png',
  };

  return (
    <div className="user-profile">
      <img src={user.imageUrl} alt={'Photo of ' + user.name} />
      <h2>{user.name}</h2>
      <p>{user.role}</p>
    </div>
  );
}

export default UserProfile;
```

#### Using (Rendering) a Component

Once you've created a component, you can use it in another component (like `App.jsx`) by:

1.  **Importing** it at the top of the file.
2.  **Rendering** it like an HTML tag: `<UserProfile />`.

Here’s how you would use the `UserProfile` component inside `App.jsx`:

```jsx
// src/App.jsx
import UserProfile from './components/UserProfile'; // Step 1: Import
import './App.css';

function App() {
  return (
    <>
      <h1>My Application</h1>
      <UserProfile /> {/* Step 2: Render the component */}
      <UserProfile /> {/* We can reuse it! */}
    </>
  );
}

export default App;
```

This will render two identical user profiles on the screen, perfectly demonstrating the power of reusability.
