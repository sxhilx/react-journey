## Notes to Myself

Okay, so Redux is a different thing and React Redux is a different thing. Redux is a core library, and React Redux is its implementation for wiring so that React and Redux can talk to each other.

I started by creating a store. I created an app folder in src, and in it, I created a store.js file. This store.js file creates a store function using the createStore() method from Redux Toolkit.

Then, I created another folder in src and named it features. In here, I created a todoSlice.js file (we call a feature a "slice" — it's just a naming convention) where I first defined the initialState variable (the default state), which is an object that contains todos, which is an array of objects with id and text properties.

Thereafter, I created and exported the todoSlice function, which makes use of the createSlice() method. This method takes an object with three properties:

    name — the name of the slice,
    initialState — the default state, and
    reducers — an object of reducer functions.

In the reducers, you can define as many key-function pairs as you want, but I created two: addTodo and removeTodo.

For the addTodo function, we get access to two arguments:

    state — which holds the updated value in the store, and
    action — which contains the action.payload.

I created a todo variable that has an id and text. For a unique id, I used the nanoid() method provided by Redux Toolkit. For the text, I used action.payload, and then I pushed the todo variable into the state.todos array.

Similarly, with removeTodo, I used state, where I applied a filter on state.todos, keeping only the todos whose id is not equal to action.payload.

I then exported the reducers individually, along with the main source of reducers.

In the store.js file, I imported the main reducer and provided it to the reducer key in the store.

After that, I created a component called AddTodo where I used a form. On submit, I called a function.

In this component, I used the useDispatch hook and stored the dispatch function in a dispatch variable. This essentially allows us to dispatch actions. I then passed this function to the onSubmit handler. In the handler, I used the dispatch method and called the addTodo reducer, passing in the input state.

Then, I created another component called Todos where I used the useSelector hook with a callback function to access the state (i.e., state.todos).

I also used a dispatch function to handle delete actions. I mapped over the todos to display each todo item. For removeTodo, I added an onClick event on the delete button, where I called dispatch and passed in the todo.id as the payload.

Finally, in main.jsx, I wrapped the app in the Provider from React Redux and passed in the store. This allows the entire app to access the store.