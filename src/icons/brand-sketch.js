import React from 'react';

export default function BrandSketch({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-sketch'
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
      <path d='M3.262 10.878l7.991 8.789c.4.44 1.091.44 1.491 0l7.993-8.79c.313-.344.349-.859.087-1.243L17.287 4.44a.996.996 0 00-.823-.436H7.538a.996.996 0 00-.823.436 2713782426.663 2713782426.663 0 01-3.54 5.192c-.263.385-.227.901.087 1.246z' />
    </svg>
  );
}