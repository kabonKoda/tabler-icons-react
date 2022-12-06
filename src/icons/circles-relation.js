import React from 'react';

export default function CirclesRelation({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circles-relation'
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
      <path d='M9.183 6.117a6 6 0 1 0 4.511 3.986' />
      <path d='M14.813 17.883a6 6 0 1 0 -4.496 -3.954' />
    </svg>
  );
}
