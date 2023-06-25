import { Outlet } from "react-router-dom";
import { ContainerHeader, ContainerNav, HeaderItem, HeaderItemLink, HeaderList } from "./Layout.styled";
import { Suspense } from "react";

export const Layout = () => {
    return <div>
    <ContainerHeader>
      <ContainerNav>
        <HeaderList>
          <HeaderItem>
            <HeaderItemLink to='/'>Home</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink to='/movies'>Movies</HeaderItemLink>
          </HeaderItem>
          </HeaderList>
        </ContainerNav>
       
    </ContainerHeader>
        <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
        </div>
}