import React from 'react';

export default function BrandWaze({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-waze'
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
      <path d='M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62' />
      <path d='M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54' />
      <circle cx='16' cy='19' r='2' />
      <circle cx='8' cy='19' r='2' />
      <path d='M16 9h.01' />
      <path d='M11 9h.01' />
    </svg>
  );
}
