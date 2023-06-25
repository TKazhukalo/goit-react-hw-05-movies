import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1158px;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: auto;
    margin-right: auto;  
    border-bottom: 1px solid #0ad066;

`
export const ContainerNav=styled.nav`
    display: flex;
    align-items: center;
`
export const HeaderList=styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    gap:20px;
    color: #000000;
`
export const HeaderItem=styled.li` 
    font-size: 20px;
    font-weight: 600; 
    
`
export const HeaderItemLink=styled(NavLink)`
   text-decoration:none; 
   color: green;
`