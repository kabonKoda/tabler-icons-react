import React from 'react';

export default function EaseOutControlPoint({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ease-out-control-point'
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
      <path d='M3 21s10 -16 18 -16' />
      <path d='M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z' />
      <path d='M7 5h2' />
      <path d='M14 5h-2' />
    </svg>
  );
}
