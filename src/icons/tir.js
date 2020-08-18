import React from 'react';

export default function Tir({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-tir'
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
      <circle cx='5' cy='17' r='2' />
      <circle cx='17' cy='17' r='2' />
      <path d='M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5' />
      <path d='M12 18v-13h3' />
      <polyline points='3 17 3 12 12 12' />
    </svg>
  );
}