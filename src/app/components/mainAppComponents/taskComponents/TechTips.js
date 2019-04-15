import React from "react";

const TechTips = ({techList, setTech}) => {
  const isFocused = document.activeElement && document.activeElement.name === 'tech';

  return !isFocused || !techList.length ? null : (
    <ul className='tech-autocomplete'>
      {techList.map((it, i) => {
        if (i >= 3) {
          return null;
        }
        return (
          <li
            className='tech-autocomplete__item'
            key={it.name}
            onClick={() => setTech(it.name)}
          >
            {it.name}
          </li>
        );
      })}
    </ul>

  )
};

export default TechTips;
