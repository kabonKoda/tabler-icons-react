import React from 'react';

export default function BuildingBroadcastTower({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-building-broadcast-tower'
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
      <circle cx='12' cy='12' r='1' />
      <path d='M16.616 13.924a5 5 0 1 0 -9.23 .004' />
      <path d='M20.307 15.469a9 9 0 1 0 -16.615 0' />
      <path d='M9 21l3 -9l3 9' />
      <path d='M10 19h4' />
    </svg>
  );
}
