# 8 mini Context project

In this mini project, I learned about the useContext hook and createContext method to send and retrieve data between multiple subcomponents without having to pass values through every component.

I started by creating a context folder, which contained the userContext.js file, where I used createContext to set up a UserContext. This UserContext provides a context that can be used as a wrapper tag around all components that need access to shared data.

Next, I created a UserContextProvider.jsx file, where I imported UserContext from userContext.js. In this file, I used a state variable to set the user. I then wrapped the component tree with <UserContext.Provider> and passed in the user and setUser values as the context parameters. I also used a children parameter in the main function of UserContextProvider, which allows all components wrapped within <UserContext.Provider> to access the context.

After setting up the context, I created a Login component where I used the useContext hook to access UserContext. I used useState to manage username and password, and used setUser to update the user data. By using useContext, I accessed UserContext and then set the user information.

Finally, I created a Profile component, where I imported user from UserContext. In Profile, I added a conditional statement to check if a user is set: if not, it displays "Please log in," and if the user is set, it welcomes the user by showing user.username.










