import React from 'react';

export default function HandMiddleFinger({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-hand-middle-finger'
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
      <path d='M8 13.5v-4a1.5 1.5 0 0 1 3 0v2.5m0 -2.5v-6a1.5 1.5 0 0 1 3 0v8.5m0 -2.5a1.5 1.5 0 0 1 3 0v2.5m0 -1.5a1.5 1.5 0 0 1 3 0v5.5a6 6 0 0 1 -6 6h-2a7 6 0 0 1 -5 -3l-2.7 -5.25a1.4 1.4 0 0 1 2.75 -2l.9 1.75' />
    </svg>
  );
}