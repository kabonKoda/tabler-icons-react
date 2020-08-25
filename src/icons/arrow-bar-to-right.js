import React from 'react';

export default function ArrowBarToRight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-bar-to-right'
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
      <line x1='14' y1='12' x2='4' y2='12' />
      <line x1='14' y1='12' x2='10' y2='16' />
      <line x1='14' y1='12' x2='10' y2='8' />
      <line x1='20' y1='4' x2='20' y2='20' />
    </svg>
  );
}
