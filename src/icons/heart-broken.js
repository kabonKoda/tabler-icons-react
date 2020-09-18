import React from 'react';

export default function HeartBroken({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-heart-broken'
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
      <path d='M19.5 13.572 l-7.5 7.428 l-7.5 -7.428a5 5 0 1 1 7.5 -6.566 a5 5 0 1 1 7.5 6.572' />
      <path d='M12 7l-2 4l4 3l-2 4v3' />
    </svg>
  );
}