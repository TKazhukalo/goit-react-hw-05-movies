import {lazy,Suspense}  from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "./App.styled";
import { Layout } from "../Layout/Layout";

const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Cast =lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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
