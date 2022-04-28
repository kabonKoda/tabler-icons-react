import React from 'react';

export default function WindOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wind-off'
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
      <path d='M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24' />
      <path d='M3 12h9' />
      <path d='M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282' />
      <path d='M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
