import React from 'react';

export default function LayoutKanban({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-layout-kanban'
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
      <line x1='4' y1='4' x2='10' y2='4' />
      <line x1='14' y1='4' x2='20' y2='4' />
      <rect x='4' y='8' width='6' height='12' rx='2' />
      <rect x='14' y='8' width='6' height='6' rx='2' />
    </svg>
  );
}