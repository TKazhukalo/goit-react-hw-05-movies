import styled from "styled-components";
import { Link } from 'react-router-dom';
export const MoviesItem=styled.li`
  list-style-type:none; 
  margin-bottom:10px;
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: #020202;
  &:hover {
    color: #276f03;
  }
`;