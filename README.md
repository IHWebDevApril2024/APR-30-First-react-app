# Our first React app

In this lesson we've learned how to create a new react app using Vite.
Vite is a tool that is going to help us create all the files and configurations we need to start a new React project.

## How to create a new React app using Vite

1. We need node in our computer.
2. Run the npm create command: `npm create vite@latest my-react-app --template react`
3. Change the directory to the new project: `cd my-react-app`
4. Install the dependencies: `npm install`
5. Start the development server: `npm run dev`

The development server will start and you will be able to see your new React app in the browser. By default, the development server will run on `http://localhost:5173`. If you open this URL in your browser, you will see the new React app.

## Functional components

In React, we can create components using functions. These components are called functional components. They are simple and easy to understand.

```jsx
function MyComponent() {
  return <h1>Hello, World!</h1>;
}
export default MyComponent;
```

In the example above, we created a functional component called `MyComponent`. This component returns an `h1` element with the text `Hello, World!`.
If we want to use this component in another file, we need to export it using the `export default` syntax.

To import the component in another file, we use the `import` syntax.

```jsx
import MyComponent from "./MyComponent";
```

## JSX

JSX is the extension of JavaScript that allows us to write HTML-like code in our React components.

## React Fragments

Every time we create a component in React, we need to return a single element. If we want to return multiple elements, we can use React Fragments.

Example without React Fragments:

```jsx
function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}
```

In the example above, we are returning a `div` element with an `h1` and a `p` element. If we don't add this div element, we will get an error.

Example with React Fragments:

```jsx
function MyComponent() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is a paragraph.</p>
    </>
  );
}
```

In case we don't want to add a div element, we can use React Fragments. React Fragments allow us to return multiple elements without adding a parent element.
This was introduced in React 16.2 to solve the problem of returning multiple elements in a component.

## Props

All React components can receive props. Props are used to pass data from a parent component to a child component. They are written as attributes in the JSX code.

Example:

```jsx
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent name="John" />
    </>
  );
}
```

In this example, we are passing the prop `name` to the `MyComponent` component. The value of name is `John`.

When we want to use the prop in the component, we can access it using the props object.

```jsx
function MyComponent(props) {
  // include props as a parameter
  return <h1>Hello, {props.name}!</h1>;
}
```

## Children props

In React, we can also pass children to a component. Children are the elements that are inside the component's tag.

Example:

```jsx
import MyComponent from "./MyComponent";

function App() {
  return (
    <>
      <MyComponent>
        <p>This is a child paragraph inside MyComponent.</p>
      </MyComponent>
    </>
  );
}
```
To access the children in the component, we use the `props.children` property.

```jsx
function MyComponent(props) {
  return (
    <>
      <h1>Hello, World!</h1>
      {props.children} {/* render the children elements we added */}
    </>
  );
}
```

## Conclusion

In this lesson, we learned how to create a new React app using Vite. We also learned how to create functional components, use JSX, React Fragments, props, and children props. These are the basics of React that we need to know to start building React applications.
Good luck with your React journey!
