import React from 'react';

export default function ClockPause({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-clock-pause'
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
      <path d='M13 20.94a8.916 8.916 0 0 1 -7.364 -2.576a9 9 0 1 1 15.306 -5.342' />
      <path d='M12 7v5l2 2' />
      <path d='M17 17v5' />
      <path d='M21 17v5' />
    </svg>
  );
}
