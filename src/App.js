import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Videos from './pages/Videos';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/videos/search/:keyword',
        element: <Videos />,
      },
      {
        path: '/videos/watch/:id',
        element: <Detail />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
