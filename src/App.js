/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './App.module.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AppRoutes } from './common/routes/AppRoutes';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

function App() {
  // const [showFormFooter, setShowFormFooter] = useState(true);

  const Layout = () => {
    return (
      <div className={styles.app}>
        <Header />
        <Helmet />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter(
    [
      {
        path: AppRoutes.MAIN,
        element: <Layout />,
        errorElement: <h1>PAGE NOT FOUND</h1>,
        children: [
          {
            path: AppRoutes.MAIN,
            element: <Home />,
            errorElement: <h1>HOME PAGE NOT FOUND</h1>,
          },
          
        ],
      },
    ],
    { basename: '/' }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

ReactGA.initialize('G-QZV34VEC5N');

export default App;
