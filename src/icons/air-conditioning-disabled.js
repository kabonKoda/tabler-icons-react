import React from 'react';

export default function AirConditioningDisabled({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-air-conditioning-disabled'
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
      <rect x='3' y='8' width='18' height='8' rx='2' />
      <path d='M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3' />
    </svg>
  );
}
