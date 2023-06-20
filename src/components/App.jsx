import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { Route,Routes } from "react-router-dom";
import { Container } from "./App.styled";
import { Layout } from "./Layout";
export const App = () => {
  return (
    <Container>
      
      <Routes>
         <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Route>
      </Routes>
    </Container>
  );
};
