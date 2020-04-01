import React from 'react';

export default function FlipVertical({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-flip-vertical'
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
      <line x1='12' y1='3' x2='12' y2='21' />
      <polyline points='16 7 16 17 21 17 16 7' />
      <polyline points='8 7 8 17 3 17 8 7' />
    </svg>
  );
}
