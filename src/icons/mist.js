import React from 'react';

export default function Mist({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-mist'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      stroke={color}
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...restProps}
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M5 5h3m4 0h9' />
      <path d='M3 10h11m4 0h1' />
      <path d='M5 15h5m4 0h7' />
      <path d='M3 20h9m4 0h3' />
    </svg>
  );
}
