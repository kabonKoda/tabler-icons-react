import React from 'react';

export default function ArrowRampRight3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-ramp-right-3'
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
      <path d='M6 3v6' />
      <path d='M16 16l4 -4l-4 -4' />
      <path d='M6 21v-6a3 3 0 0 1 3 -3h11' />
    </svg>
  );
}