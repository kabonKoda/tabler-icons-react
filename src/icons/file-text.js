import React from 'react';

export default function FileText({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-file-text'
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
      <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
      <line x1='9' y1='9' x2='10' y2='9' />
      <line x1='9' y1='13' x2='15' y2='13' />
      <line x1='9' y1='17' x2='15' y2='17' />
    </svg>
  );
}
