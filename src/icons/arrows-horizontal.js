import React from 'react';

export default function ArrowsHorizontal({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-horizontal'
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
      <polyline points='7 8 3 12 7 16' />
      <polyline points='17 8 21 12 17 16' />
      <line x1='3' y1='12' x2='21' y2='12' />
    </svg>
  );
}
