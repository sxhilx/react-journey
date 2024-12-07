# 09 theme Switcher

In this project, I enhanced my knowledge about the Context API.

I started by creating a context folder and a theme.js file, where I first created a ThemeContext variable and used the createContext method. I passed in an object with a default theme of "light" and empty callback functions for darkTheme and lightTheme, which I later defined in App.jsx. Then, I created a ThemeProvider constant, essentially just adding .Provider to my context, which saved a step of creating a separate file. I also created a custom hook that returns useContext with my ThemeContext variable.

After that, in App.jsx, I wrapped my HTML inside the ThemeProvider context wrapper from theme.js and provided values for the ThemeContext object. I used the useState hook to set the default theme and defined the darkTheme and lightTheme functions, setting their values accordingly. Then, I used the useEffect hook to first remove both the dark and light classes from the HTML using querySelector. I passed in the state variable to update the classList.

Next, I created ThemeBtn and Card components. In the ThemeBtn component, I added an onChange attribute inside the input tag and assigned it to the onChangeBtn method. I also used the checked attribute to return true or false if the default theme is "dark". Based on that true or false, I called either the darkTheme() or lightTheme() function. To retrieve the true or false value from the input’s checked attribute, I used e.currentTarget.checked. And with that, the project was complete.



