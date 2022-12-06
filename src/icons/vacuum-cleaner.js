import React from 'react';

export default function VacuumCleaner({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-vacuum-cleaner'
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
      <path d='M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z' />
      <path d='M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z' />
      <path d='M12 16h.01' />
    </svg>
  );
}
