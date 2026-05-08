export function cn(...classes: (string | undefined | null | boolean)[]) {
    return classes.filter(Boolean).join(" ");
}

/** 
This `cn` (short for **Class Name**) function is a common utility in React development used to manage CSS classes dynamically and cleanly.

Here is a breakdown of how it works:

### 1. The Inputs (`...classes`)
The `...classes` syntax is a **rest parameter**. It allows you to pass as many arguments as you want to the function (e.g., `cn('class1', 'class2', condition && 'class3')`). Inside the function, these arguments are gathered into an array called `classes`.

### 2. The Type Definition
The type `(string | undefined | null | boolean)[]` tells TypeScript that each argument can be a string or a "falsy" value like `false`, `null`, or `undefined`. This is important because it allows you to do things like this:

```tsx
// If isActive is true, 'active-style' is added. 
// If isActive is false, the expression returns 'false', which is allowed.
cn('base-style', isActive && 'active-style') 
```

### 3. The Logic (`.filter(Boolean)`)
This is the "magic" part. It filters the array and keeps only the "truthy" values. 
- If an argument is `'base-style'`, it stays.
- If an argument is `false` (because a condition wasn't met), it is removed.
- If an argument is `undefined`, it is removed.

### 4. The Output (`.join(" ")`)
Finally, it takes all the remaining strings and joins them together with a space in between to create a valid `className` string for HTML.

---

### Example in Action
Imagine you have a button that changes color when it's disabled:

```tsx
<button className={cn(
    "px-4 py-2 rounded",   // Always applied
    disabled ? "bg-gray-400" : "bg-blue-500", // Conditional
    className              // Custom classes from props
)}>
    Click Me
</button>
```

Instead of having to write complex template literals with messy ternary operators like:
`` `px-4 py-2 rounded ${disabled ? "bg-gray-400" : "bg-blue-500"} ${className || ""}` ``

You can just use `cn()` to keep your code readable and prevent accidental extra spaces in your HTML.
*/