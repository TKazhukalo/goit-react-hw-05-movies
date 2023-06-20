import { NavLink, Outlet } from "react-router-dom";
import { ContainerHeader, ContainerNav, HeaderItem, HeaderList } from "./Layout.styled";

export const Layout = () => {
    return <div>
    <ContainerHeader>
      <ContainerNav>
        <HeaderList>
          <HeaderItem>
            <NavLink to='/'>Home</NavLink>
          </HeaderItem>
          <HeaderItem>
            <NavLink to='/movies'>Movies</NavLink>
          </HeaderItem>
          </HeaderList>
        </ContainerNav>
       
    </ContainerHeader>
        <Outlet />
        </div>
}