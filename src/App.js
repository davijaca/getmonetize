/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import styles from './App.module.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { AppRoutes } from './common/routes/AppRoutes';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

function App() {
  // const [showFormFooter, setShowFormFooter] = useState(true);

  const Layout = () => {
    const location = useLocation();
  
    // Function to determine the background image based on the current route
    const getBackgroundImage = () => {
      switch (location.pathname) {
        default:
          return '/images/backgroundImgs/Header1.png';
        case '/howitworks':
          return '/images/backgroundImgs/Header1.png';
        case '/game':
          return '/images/backgroundImgs/Header2.png';
        case '/mobile':
          return '/images/backgroundImgs/Header2.png';
        case '/newspaper':
          return '/images/backgroundImgs/Header3.png';
        case '/nonprofit':
          return '/images/backgroundImgs/Header3.png';
        case '/website':
          return '/images/backgroundImgs/Header4.png';

      }
    };
  
    return (
      <div>
        <Header backgroundImage={getBackgroundImage()} />
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
            errorElement: <h1>PAGE NOT FOUND</h1>,
          },

          {
            path: AppRoutes.GAME,
            element: <Game />,
            errorElement: <h1>PAGE NOT FOUND</h1>,
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
