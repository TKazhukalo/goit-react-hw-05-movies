import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDetails = styled.div`
   // border-bottom: 1px solid #0ad066;
    flex-grow:1;
    flex-direction:row;
   
`;
export const Button=styled.button` 
    width: 100px;
    height: 40px;
    border: none;
    margin-top:20px;
    margin-bottom: 20px;
    border-radius:8px;
    font-size:16px;
    font-family:'Comfortaa', cursive;
    cursor: pointer;
    color: black;
    background-color: #28d03e;
        &:hover
         {
   
            background-color: #2fe247;
            box-shadow: 0 0 0 1px #76f752, 0 0 10px #333;
        }
`
export const MovieDetailsList=styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    gap:20px;
    color: #000000;
`
export const MovieDetailsLink=styled(Link)`
   text-decoration:none; 
   color: green;
   font-weight:600;
   font-size:20px;
   &:hover{
    color: #adb90a;
   }
`
export const ContainerMovie = styled.div`
display:flex;
align-items: stretch;
margin-bottom:30px;
`
export const MovieImg=styled.img`
    float: left;
    margin-right: 20px;
`