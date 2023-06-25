import styled from "styled-components";

export const ContainerDetails = styled.div`
    border-bottom: 1px solid #0ad066;
    
`;
export const Button=styled.button`
    
    width: 100px;
    height: 40px;
    border: none;
    margin-top:20px;
    margin-bottom: 20px;
    border-radius:8px;
    font-size:16px;
    cursor: pointer;
    color: black;
    background-color: #28d03e;
        &:hover
         {
   
            background-color: #2fe247;
            box-shadow: 0 0 0 1px #76f752, 0 0 10px #333;
        }
`