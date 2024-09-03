import { createRoot } from 'react-dom/client';
import App from '@/components/App';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { Suspense } from 'react';
import { LazyAbout } from '@/pages/About/About.lazy';
import { LazyShop } from '@/pages/Shop/Shop.lazy';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/about',
				element: <Suspense><LazyAbout /></Suspense>
			},
			{
				path: '/shop',
				element: <Suspense><LazyShop /></Suspense>
			}
		]
	},
]);


const root = document.getElementById('root');

if (!root) {
	throw new Error('root not found');
}

const container = createRoot(root);

container.render(
	<RouterProvider router={router} />
);