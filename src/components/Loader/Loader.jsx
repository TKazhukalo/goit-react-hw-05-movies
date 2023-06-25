import React from "react";
import { InfinitySpin } from  'react-loader-spinner'
import {  LoaderAnimation } from "./Loader.styled";
 const Loader = () => {
   return ( 
  <LoaderAnimation> <InfinitySpin 
  width='100'
  color="#370574" />
       </LoaderAnimation>  
    )
}

export default Loader;