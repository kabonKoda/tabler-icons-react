import React from 'react';

export default function WreckingBall({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wrecking-ball'
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
      <circle cx='19' cy='13' r='2' />
      <circle cx='4' cy='17' r='2' />
      <circle cx='13' cy='17' r='2' />
      <line x1='13' y1='19' x2='4' y2='19' />
      <line x1='4' y1='15' x2='13' y2='15' />
      <path d='M8 12v-5h2a3 3 0 0 1 3 3v5' />
      <path d='M5 15v-2a1 1 0 0 1 1 -1h7' />
      <path d='M19 11v-7l-6 7' />
    </svg>
  );
}
