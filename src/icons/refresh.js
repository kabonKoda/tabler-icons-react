import React from 'react';

export default function Refresh({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-refresh'
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
      <path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4' />
      <path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4' />
    </svg>
  );
}
