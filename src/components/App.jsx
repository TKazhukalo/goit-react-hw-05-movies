import {Home}   from "pages/Home";
import {MovieDetails}  from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { Route,Routes } from "react-router-dom";
import { Container } from "./App.styled";
import { Layout } from "./Layout";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { Suspense } from "react";


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
        </Route>
      </Routes>
      </Container>
      </Suspense>
  );
};
