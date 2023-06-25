//import { lazy } from "react";
import {Home}   from "../../pages/Home/Home";
import {MovieDetails}  from "pages/MovieDetails/MovieDetails";
import { Movies } from "pages/Movies/Movies";
import { Route,Routes } from "react-router-dom";
import { Container } from "./App.styled";
import { Layout } from "../Layout/Layout";
import { Cast } from "../Cast/Cast";
import { Reviews } from "../Reviews/Reviews";
import React, { Suspense } from "react";

// const Home = lazy(() => import('../pages/Home'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));
// const Movies = lazy(() => import('../pages/Movies'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));




export const App = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />} >
            <Route path='cast' element={<Cast /> } />
            <Route path='reviews' element={<Reviews />} />
          </Route>
            <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      </Container>
      </Suspense>
  );
};
