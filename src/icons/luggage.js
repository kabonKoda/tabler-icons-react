import React from 'react';

export default function Luggage({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-luggage'
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
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <rect x='6' y='6' width='12' height='14' rx='2' />
      <path d='M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1' />
      <path d='M6 10h12' />
      <path d='M6 16h12' />
      <path d='M9 20v1' />
      <path d='M15 20v1' />
    </svg>
  );
}