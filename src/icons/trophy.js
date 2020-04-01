import React from 'react';

export default function Trophy({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-trophy'
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
      <line x1='8' y1='21' x2='16' y2='21' />
      <line x1='12' y1='17' x2='12' y2='21' />
      <line x1='7' y1='4' x2='17' y2='4' />
      <path d='M17 4v8a5 5 0 0 1 -10 0v-8' />
      <circle cx='5' cy='9' r='2' />
      <circle cx='19' cy='9' r='2' />
    </svg>
  );
}
