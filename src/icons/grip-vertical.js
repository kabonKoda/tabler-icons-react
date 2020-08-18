import React from 'react';

export default function GripVertical({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-grip-vertical'
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
      <circle cx='9' cy='5' r='1' />
      <circle cx='9' cy='12' r='1' />
      <circle cx='9' cy='19' r='1' />
      <circle cx='15' cy='5' r='1' />
      <circle cx='15' cy='12' r='1' />
      <circle cx='15' cy='19' r='1' />
    </svg>
  );
}