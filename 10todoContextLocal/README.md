## 10 Todo App with context API and localstorage

I started this project by creating a context folder with a TodoContext file. In this file, I created the context and a custom hook to use that context. Inside the context, I used an array of objects to store different properties for each todo item, such as todo, id, completed, and functions to add, update, delete, and toggle completion status of todos. I then created a provider wrapper to wrap all my HTML within it.

In App.js, I defined all the functions. To add a todo, I used setTodo with the spread operator to add a new todo object to the array alongside previous items. I then created the update function, where I mapped over the array items to check for a matching id and updated it accordingly. The delete function used filter to create a new array without the todo that matches the passed id. For the toggleComplete function, I mapped over the array in setTodo and, when the id matched, used the spread operator to copy all object values, inverting the completed status (so if it was false, it becomes true, and vice versa).

I used the useEffect hook to get items from localStorage. If the length was greater than 0, I set the todos in the setTodo array using JSON.parse to convert the string into a JSON format. I used another useEffect to set items in localStorage, giving it a key and using JSON.stringify to convert the array into a string. This hook has a todo dependency, so whenever a new item is added, setItems will run again.

After setting up the context and functions, I created the TodoForm component, where I used the useTodo hook to get the addTodo function. In the form's onSubmit, I called addTodo, using Date.now to dynamically generate unique IDs for each todo. I also used state to store individual todo values, so each new todo is saved in state before being added.

Next, I created the TodoItems component, where I set up two states: one for storing the new edited message and another boolean state to check if the field is editable. Here, I also used the custom hook to access functions. In the checkbox input field, I set todo.complete as the checked attribute to mark todos as completed. On change, I called toggleComplete, which uses the todo.id to toggle the completed status.

For the input field, if isTodoEditable is false, the readOnly attribute is triggered. This state is toggled by a button, so clicking it reverses the value of isTodoEditable. If isTodoEditable is true, I call the editTodo function, which calls the updateTodo function, passing in the id and an object that uses the spread operator to include the updated todoMsg. Additionally, the disabled attribute is triggered if completed is true.

Finally, I added a delete button that calls the delete function with todo.id when clicked.