import React from 'react';

export default function DirectionsOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-directions-off'
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
      <path d='M12 21v-4' />
      <path d='M12 13v-1' />
      <path d='M12 5v-2' />
      <path d='M10 21h4' />
      <path d='M8 8v1h1m4 0h6l2 -2l-2 -2h-10' />
      <path d='M14 14v3h-8l-2 -2l2 -2h7' />
      <path d='M3 3l18 18' />
    </svg>
  );
}