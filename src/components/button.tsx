import * as React from 'react';

export interface Props  { 
    children: React.ReactNode
    className?: string
    black?: boolean

}

export function Button({children, black}: Props) {
  return(
    <button className={`bg-newYellow  ${black ? "text-body rounded-[14px] w-[303px] h-[68px]" : "text-white rounded-full px-[60px] py-[20px] hover:px-[65px] hover:py-[22px] hover:text-[25px] hover:shadow-xl transition-all"} 
      font-openSans font-bold`}>
      {children}
    </button>
  )
}