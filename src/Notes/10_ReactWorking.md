### 1. The Virtual DOM (VDOM)

The first core concept to understand is the **Virtual DOM**.

- **What it is:** The Virtual DOM is a lightweight, in-memory representation of the real browser DOM. Think of it as a **blueprint** of the UI. It's a simple JavaScript object that describes the structure, attributes, and content of all the elements.
- **Why it exists:** Manipulating the real DOM directly is slow and computationally expensive. Every time you change something, the browser has to recalculate CSS, lay out the page, and repaint the screen. It's much, much faster to manipulate a JavaScript object in memory.

React's strategy is to avoid touching the slow, real DOM as much as possible. It prefers to work with its fast VDOM blueprint first.

---

### 2. The Reconciliation Process (Powered by React Fiber)

When you update the state of a component (e.g., by calling `setCount(1)`), React kicks off its reconciliation process. Since React 16, this process is run by the **React Fiber** engine, which is designed to be **asynchronous, interruptible, and prioritized.**

This means React can start "thinking" about a change, pause that work to handle a more urgent update (like user input), and then resume its work. This process is split into two main phases:

#### Phase 1: The Render / Reconciliation Phase (Interruptible ⏸️)

This is where all the "thinking" happens. React figures out _what_ needs to be done. This entire phase happens in memory and **can be paused or aborted** if a higher-priority task comes in.

This phase includes:

1.  **Creating the "New" VDOM:** React calls your component functions and creates a new Virtual DOM tree representing the updated UI.
2.  **Running the "Diffing" Algorithm:** React compares the new VDOM with the old one to find the absolute minimum number of changes required.

**The "Diffing" Algorithm Heuristics:**

- **Rule 1: Different Element Types = Rebuild**
  If an element's type changes (e.g., a `<p>` becomes a `<div>`), React doesn't try to compare them. It destroys the old element and all its children and builds a new one from scratch.

- **Rule 2: Same Element Type = Update Attributes**
  If the element type is the same (e.g., a `<div>` is still a `<div>`), React keeps the same underlying DOM node and only checks for attributes (`className`, `style`, `onClick`, etc.), updating only what has changed.

- **Rule 3: List Diffing with the `key` Prop**
  This is where the `key` prop becomes critical. React uses the stable, unique `key` to identify which items have moved, been added, or been removed, making list updates incredibly efficient. Without keys, React has to guess and may re-render the entire list unnecessarily.

#### Phase 2: The Commit Phase (Uninterruptible ⚡)

Once the Render phase is complete, React has a final list of all the changes. It then enters the Commit phase, which is **synchronous and cannot be interrupted.**

This is crucial for UI consistency—you wouldn't want the user to see a half-finished update.

In this phase, React takes its list of changes and applies all of them to the real DOM in a single, optimized batch. This is the only time React interacts with the slow browser DOM.

---

### Summary of the Flow

1.  **Trigger:** You call `setState` or props change.
2.  **Phase 1: Render & Reconciliation (Asynchronous):** React Fiber begins building a new VDOM and "diffs" it against the old one to find changes. _This work can be paused if a higher-priority update (like typing) occurs._
3.  **Phase 2: Commit (Synchronous):** React takes the final list of changes and updates the real DOM in one single, uninterrupted batch.
