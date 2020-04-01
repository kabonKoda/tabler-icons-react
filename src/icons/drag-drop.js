import React from 'react';

export default function DragDrop({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-drag-drop'
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
      <path d='M16 8v-4h-12v12.01h4' stroke-dasharray='.001 4' />
      <path d='M20 12v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2' />
      <path d='M22 19l-6 -4v7.2l2.6 -2.6l3.4-.6' />
    </svg>
  );
}
