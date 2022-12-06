import React from 'react';

export default function CubeUnfolded({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-cube-unfolded'
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
      <path d='M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z' />
      <path d='M7 15v-5h5v5h5v-5' />
    </svg>
  );
}
