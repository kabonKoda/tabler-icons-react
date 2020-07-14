import React from 'react';

export default function FileShredder({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-file-shredder'
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
      <path d='M14 3v4a1 1 0 0 0 1 1h4' />
      <path d='M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4' />
      <line x1='3' y1='12' x2='21' y2='12' />
      <line x1='6' y1='16' x2='6' y2='18' />
      <line x1='10' y1='16' x2='10' y2='22' />
      <line x1='14' y1='16' x2='14' y2='18' />
      <line x1='18' y1='16' x2='18' y2='20' />
    </svg>
  );
}
