07 React Router

With React Router, we do not use the <a> tag since it reloads the whole page. Instead, we use Link, a React Router component, to maintain performance. I used NavLink to highlight the currently active link. NavLink provides all the Link features as well as additional styling options.
How I Made It and What I Learned

First, I created a components folder with Header and Footer subfolders, each containing their respective files. To enhance performance by not reloading the header and footer on every page, I created a Layout.jsx file, which utilizes the Outlet component from react-router-dom. The Outlet component allows new components to load in its place without reloading the header and footer, ultimately improving performance.

To replace the Outlet component with my own components, I used the RouterProvider component from react-router-dom, which requires a router parameter. I created a router variable and passed it as the parameter, using the createBrowserRouter function. Inside createBrowserRouter, I used createRoutesFromElements, which utilizes the <Route/> component. <Route/> takes two parameters: the path to the component and the element component, which in this case is the Layout component where other components will be loaded in place of the Outlet. I used multiple Route tags within this Route tag to specify routes to individual components.

Afterward, I learned how to "GET" information from the URL with React Router. I created a User component, and in main.jsx, I defined a route path with the syntax "page/:id" (in this case, page was user). In the User component, I used the useParams hook and assigned id = useParams(), which retrieves the id from the URL.

Then, I learned how to use the GitHub API to display my GitHub followers and profile picture on a GitHub component. This time, I used an async function to fetch the API data and return the response in JSON format. In the main.jsx file, I used the loader parameter in the Route tag, which takes a reference to this function. Using loader improves performance as it fetches the API data or executes the function on hover. To display the loaded data on the page, I used the useLoaderData hook from React Router to access the loaded data and render it on the page.