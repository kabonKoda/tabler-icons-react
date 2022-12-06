import React from 'react';

export default function Texture({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-texture'
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
      <path d='M6 3l-3 3' />
      <path d='M21 18l-3 3' />
      <path d='M11 3l-8 8' />
      <path d='M16 3l-13 13' />
      <path d='M21 3l-18 18' />
      <path d='M21 8l-13 13' />
      <path d='M21 13l-8 8' />
    </svg>
  );
}
