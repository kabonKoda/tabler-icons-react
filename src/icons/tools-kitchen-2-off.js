import React from 'react';

export default function ToolsKitchen2Off({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-tools-kitchen-2-off'
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
      <path d='M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c-.002 -.313 -.002 -.627 .002 -.941' />
      <path d='M19 19v2h-1v-3' />
      <path d='M8 8v13' />
      <path d='M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
