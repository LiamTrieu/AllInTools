import SiderMenu from '@components/layout/SiderMenu';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from 'view/Dashboard';
import Compare from 'view/text_tools/Compare';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiderMenu />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
    ]
  },
  {
    path: '/text-tools',
    element: <SiderMenu />,
    children: [
      {
        path: 'compare',
        element: <Compare/>,
      },
    ]
  }
]);

export default router;
