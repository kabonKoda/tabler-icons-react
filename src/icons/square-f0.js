import React from 'react';

export default function SquareF0({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-square-f0'
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
      <path d='M20 6.667v10.666a2.667 2.667 0 0 1 -2.667 2.667h-10.666a2.667 2.667 0 0 1 -2.667 -2.667v-10.666a2.667 2.667 0 0 1 2.667 -2.667h10.666a2.667 2.667 0 0 1 2.667 2.667z' />
      <path d='M13 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z' />
      <path d='M8 12h2' />
      <path d='M10 9h-2v6' />
    </svg>
  );
}
