import styled from "styled-components";

export const CastList=styled.ul`
    /* display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
    padding: 40px;
    list-style-type: none;
    font-family: 'Comfortaa', cursive;
    font-size: 18px;
    box-shadow: inset 0 0 10px 3px rgba(0, 0, 0, 0.3); */
`
export const CastItem = styled.li`
   
  display: inline-block; 
  width: 25%; 
  box-sizing: border-box; 
  padding: 10px; 
  text-align: center; 
  margin-bottom: 10px;

`
export const CastImg=styled.img`
    transition: transform 0.3s ease;
    &:hover{
         transform: scale(1.1);
    }
`