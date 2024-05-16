import React, { useState } from 'react';
import styles from './App.module.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AppRoutes } from './common/routes/AppRoutes';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';
import NonProfit from './pages/NonProfit/NonProfit';
import Website from './pages/Website/Website';
import Newspaper from './pages/Newspaper/Newspaper';
import HowItWorks from './pages/HowItWorks/HowItWorks';
// import Contact from './pages/Contact/Contact';
import Mobile from './pages/Mobile/Mobile';
import BlogAllArticles from './pages/BlogAllArticles/BlogAllArticles';
import Article from './pages/BlogAllArticles/Articles/Article/Article';
import AboutUs from './pages/AboutUs/AboutUs';
import Imprint from './pages/Imprint/Imprint';
import ToC from './pages/ToC/ToC';
import DataPrivacy from './pages/DataPrivacy/DataPrivacy';
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

function App() {
  const [showFormFooter, setShowFormFooter] = useState(true);

  const Layout = () => {
    return (
      <div className={styles.app}>
        <Header />
        <Helmet />
        <Outlet />
        <Footer showFormFooter={showFormFooter} />
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

          {
            path: AppRoutes.GAME,
            element: <Game />,
            errorElement: <h1> PAGE NOT FOUND 2</h1>,
          },
          {
            path: AppRoutes.NONPROFIT,
            element: <NonProfit />,
            errorElement: <h1> PAGE NOT FOUND 3</h1>,
          },
          {
            path: AppRoutes.WEBSITE,
            element: <Website />,
            errorElement: <h1> PAGE NOT FOUND 8</h1>,
          },

          {
            path: AppRoutes.NEWSPAPER,
            element: <Newspaper />,
            errorElement: <h1> PAGE NOT FOUND 6</h1>,
          },

          // {
          //   path: AppRoutes.CONTACT,
          //   element: <Contact />,
          //   errorElement: <h1> PAGE NOT FOUND 7</h1>,
          // },

          {
            path: AppRoutes.HOWITWORKS,
            element: <HowItWorks />,
            errorElement: <h1> PAGE NOT FOUND 8</h1>,
          },

          {
            path: AppRoutes.MOBILE,
            element: <Mobile />,
            errorElement: <h1> PAGE NOT FOUND 7</h1>,
          },

          {
            path: AppRoutes.BLOGALLARTICLES,
            element: <BlogAllArticles setShowFormFooter={setShowFormFooter} />,
            errorElement: <h1>HOME PAGE NOT FOUND</h1>,
          },

          {
            path: AppRoutes.ARTICLE,
            element: <Article setShowFormFooter={setShowFormFooter} />,
            errorElement: <h1>HOME PAGE NOT FOUND</h1>,
          },

          {
            path: AppRoutes.ABOUTUS,
            element: <AboutUs />,
            errorElement: <h1> PAGE NOT FOUND 4</h1>,
          },

          {
            path: AppRoutes.IMPRINT,
            element: <Imprint />,
            errorElement: <h1> PAGE NOT FOUND 4</h1>,
          },

          {
            path: AppRoutes.DATAPRIVACY,
            element: <DataPrivacy />,
            errorElement: <h1> PAGE NOT FOUND 4</h1>,
          },

          {
            path: AppRoutes.TOC,
            element: <ToC />,
            errorElement: <h1> PAGE NOT FOUND 4</h1>,
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
