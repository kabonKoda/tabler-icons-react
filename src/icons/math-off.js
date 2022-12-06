import React from 'react';

export default function MathOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-math-off'
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
      <path d='M20 13l-1.493 1.493m-2.013 2.013l-.494 .494' />
      <path d='M20 5h-7l-.881 3.085m-.892 3.121l-2.227 7.794l-3 -6h-2' />
      <path d='M3 3l18 18' />
    </svg>
  );
}