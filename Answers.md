# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is a library that allows developers to build large-scale applications. As discussed in class. React built a virtual DOM that allows our applications to consume the huge amounts of data that modern applications use. The regular DOM would struggle to handle all this data. 

1. What does it mean to think in react?

Thinking in React means to think of your application as a collection of components. Information is shared from parent to child via props. 

1. Describe state.

"State" is basically data. State is passed to virtual DOM and it gets rendered to the real DOM. This is how the user is able to see the data. 

1. Describe props.

"Props" is an object that we use in React to pass information from one component to another. Props are read-only in order to reduce the number of "moving parts" and make debugging easier. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is an effect that takes place outside of the scope of the function in question. They can go outside of the function and fetch data from an API, for example. You can sync side effects in a React component to state or prop changes by passing in a 	dependency array into the effect hook. If the array is empty, it will only run once. 
