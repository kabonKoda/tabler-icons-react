import React from 'react';

export default function ChartAreaLine({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-chart-area-line'
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
      <polyline points='4 19 8 13 12 15 16 10 20 14 20 19 4 19' />
      <polyline points='4 12 7 8 11 10 16 4 20 8' />
    </svg>
  );
}
