import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Friends from "./components/Friends/Friends";
import Main from "./layouts/Main";
import "./App.css";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />,
			children: [
				{ path: "/", element: <Home /> },
				{ path: "/home", element: <Home /> },
				{ path: "/products", element: <Products /> },
				{
					path: "/friends",
					element: <Friends />,
					loader: async () => {
						return fetch(
							"https://jsonplaceholder.typicode.com/users"
						);
					},
				},
			],
		},
		{ path: "/about", element: <About /> },
		{
			path: "*",
			element: (
				<h2>
					Page not found.{" "}
					<span className="text-danger">Returned 404.</span>
				</h2>
			),
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
