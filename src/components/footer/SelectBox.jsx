import React from 'react';

function SelectBox({ data, title }) {
  return (
    <>
      <p className='title'>{title}</p>
      <select name={title} id={title}>
        {data.map((el) => (
          <option key={el.id} value={el.value}>
            {el.value}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectBox;
