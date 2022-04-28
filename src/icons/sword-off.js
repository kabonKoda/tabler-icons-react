import React from 'react';

export default function SwordOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-sword-off'
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
      <path d='M11.934 7.942l3.066 -3.942h5v5l-3.93 3.057m-2.253 1.752l-2.817 2.191l-4 4l-3 -3l4 -4l2.174 -2.795' />
      <path d='M6.5 11.5l6 6' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
