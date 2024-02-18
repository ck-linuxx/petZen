interface IProps {
  name: string
  descriptionPet: string
  description: string
  img: string
  alt: string
}

import petIcon from "../assets/icons/petIcon.svg"

export function CardPerson({img, alt, name, descriptionPet, description}: IProps) {
  return(
    <li className=" w-[387px] h-[364px] px-[35px] pt-[40px] pb-[15px] shadow-xl rounded-[45px] outline outline-body outline-1">
      <img src={petIcon} alt="Selo de Pet" className="flex absolute ml-[283px]"/>
      <div className="flex items-end mb-[28px]">
        <img src={img} alt={alt} className="w-[105px] h-[102px]"/>
        <div className="ml-[20px]">
          <h4 className="font-space font-medium text-[20px]">{name}</h4>
          <p className="font-space text-[18px]">{descriptionPet}</p>
        </div>
      </div>

      <hr className="mb-[28px] border-body"/>
      <p>{description}</p>

    </li>
  )
}