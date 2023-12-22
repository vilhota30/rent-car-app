import {Route, Routes} from 'react-router-dom';
import React, {lazy, Suspense} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('../pages/CarListPage/CarListPage'))
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))

export const App = () => {
  return (
    <Suspense fallback={<Loader />} >
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<HomePage />}/>
              <Route path='catalog' element={<CatalogPage />}/>
              <Route path='favorite' element={<FavoritesPage />}/>
              </Route>
            <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  </Suspense>
  );
};
