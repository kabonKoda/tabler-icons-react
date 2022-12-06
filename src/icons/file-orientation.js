import React from 'react';

export default function FileOrientation({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-file-orientation'
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
      <path d='M14 3v4a1 1 0 0 0 1 1h4' />
      <path d='M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2' />
      <path d='M13 20h5a2 2 0 0 0 2 -2v-5' />
      <path d='M15 22l-2 -2l2 -2' />
      <path d='M18 15l2 -2l2 2' />
    </svg>
  );
}