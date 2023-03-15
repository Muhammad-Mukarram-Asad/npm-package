// export const Requirements = () => {
//   return (
//     <div>
//        <h1>As Salam u alaikum to all of you... </h1>
//        <button style={{color:"white", backgroundColor:"darkblue"}}>Primary</button>
//        <button style={{color:"white", backgroundColor:"grey"}}> Secondary</button>
//     </div>
//   )
// }

import '../../style.css';
import { Requirement } from "../requirement/Requirement";
import React, { useCallback, useEffect } from 'react';

export const Requirements = ({value,requirements,onValidChange}) => {
  const validChangeCb = useCallback(onValidChange, []);

  useEffect(() => {
    validChangeCb(
      requirements.every(r => r.validator(value))
    );
  }, [value, requirements, validChangeCb]);

  return(
      requirements.map((inner_element, index) => (
        <Requirement
      key={index}
      value={value}
      requirement={inner_element}
      onValidChange={onValidChange}
    />
  ))
  );
};