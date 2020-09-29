import React from 'react';

export default function FoldDown({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-fold-down'
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
      <path d='M12 11v8l3 -3m-6 0l3 3' />
      <line x1='9' y1='7' x2='10' y2='7' />
      <line x1='14' y1='7' x2='15' y2='7' />
      <line x1='19' y1='7' x2='20' y2='7' />
      <line x1='4' y1='7' x2='5' y2='7' />
    </svg>
  );
}
