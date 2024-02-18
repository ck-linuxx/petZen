export interface IProps {
  logo: string
  alt: string
  description: string
  title: string
}

export function Card({logo, alt, description, title}: IProps) {
  return (
    <li className="flex flex-col items-center rounded-lg shadow-md max-w-[299px] max-h-[224px] m-auto p-[24px]">
      <img src={logo} alt={alt} className="max-w-[65px] max-h-[56px]"/>
      <p className="pt-[16px] pb-[8px] font-openSans font-bold text-[28px]">{title}</p>
      <p className="font-openSans font-regular text-[14px] pb-[24px] text-center">{description}</p>
    </li>
  )
}