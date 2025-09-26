### JSX: JavaScript XML

**JSX** stands for **JavaScript XML**. It's a special syntax extension for JavaScript that allows you to write HTML-like code directly inside a JavaScript file. It is the language you will use to describe what your user interface should look like.

Browsers don't understand JSX. Before your code is served to the browser, a tool like Vite (using a transpiler like Babel) converts your JSX into regular `React.createElement()` function calls, which are plain JavaScript objects that React knows how to turn into actual DOM elements.

#### Why Use JSX?

Writing UI with `React.createElement()` is cumbersome and hard to read. JSX makes the process of creating UI elements intuitive, declarative, and easy to visualize because it looks just like the final HTML output.

**Without JSX (Plain JavaScript):**

```javascript
return React.createElement('div', { className: 'greeting' }, 'Hello, World!');
```

**With JSX (Much easier to read\!):**

```jsx
return <div className="greeting">Hello, World!</div>;
```

#### Key Rules of JSX

There are a few important rules you must follow when writing JSX:

1.  **Return a Single Root Element**
    A component can only return one top-level element. If you need to return multiple elements, you must wrap them in a single parent tag, like a `<div>`, or use a **React Fragment** (`<> ... </>`).

    ```jsx
    // Correct: Wrapped in a Fragment
    return (
      <>
        <h1>Hello!</h1>
        <p>This is a paragraph.</p>
      </>
    );
    ```

2.  **Use `className` instead of `class`**
    Since JSX is JavaScript, `class` is a reserved keyword (for creating JavaScript classes). So, for adding CSS classes, you must use the `className` attribute.

    ```jsx
    // Correct
    <div className="profile-card"></div>
    ```

3.  **Use Curly Braces `{}` for JavaScript**
    This is the most powerful feature of JSX. You can embed any valid JavaScript expression (a variable, a function call, a mathematical operation) directly inside your JSX by wrapping it in curly braces.

    ```jsx
    const name = 'Ganesh';
    const year = 2025;

    return (
      <h1>
        Hello, {name}! Welcome to {year}.
      </h1>
    );
    ```

4.  **All Tags Must Be Closed**
    Unlike HTML, every tag in JSX must be closed. For tags that don't have a closing tag in HTML (like `<img>`, `<input>`, `<br>`), you must add a forward slash at the end to make them self-closing.

    ```jsx
    // Correct
    <img src="/logo.png" alt="A logo" />
    <input type="text" />
    ```

5.  **Use camelCase for Attributes**
    Most HTML attributes are written in `camelCase` in JSX. For example, `onclick` becomes `onClick`, and `tabindex` becomes `tabIndex`.

---
