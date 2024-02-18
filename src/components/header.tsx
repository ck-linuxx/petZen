import { Button } from "./button";

interface IProps {
  button?: boolean
}

export function Header({button}: IProps) {

  return(
    <div className="flex gap-[165px] justify-around">
      <div className="flex">
        <h1 className="text-newBlack font-paytoneOne text-[60px]">Pet</h1>
        <h1 className="text-newYellow font-paytoneOne text-[60px]">Zen</h1>
      </div>
    
      <div className="flex gap-[40px] self-center">
        <button><p className="text-body font-openSans text-[20px] hover:bg-newYellow hover:px-[10px] hover:py-[2px] hover:text-[25px] rounded-[7px] hover:shadow-lg transition-all">Home</p></button>
        <button><p className="text-body font-openSans text-[20px] hover:bg-newYellow hover:px-[10px] hover:py-[2px] hover:text-[25px] rounded-[7px] hover:shadow-lg transition-all ">Sobre</p></button>
        <button><p className="text-body font-openSans text-[20px] hover:bg-newYellow hover:px-[10px] hover:py-[2px] hover:text-[25px] rounded-[7px] hover:shadow-lg transition-all ">Serviços</p></button>
        <button><p className="text-body font-openSans text-[20px] hover:bg-newYellow hover:px-[10px] hover:py-[2px] hover:text-[25px] rounded-[7px] hover:shadow-lg transition-all  text-nowrap">Nosso App</p></button>
        {button ? <button><p className="text-body font-openSans text-[20px] hover:bg-newYellow hover:px-[10px] hover:py-[2px] hover:text-[25px] rounded-[7px] hover:shadow-lg transition-all ">Blog</p></button> : ""}
      </div>

      {button ? 
      <div className="flex self-center">
        <Button>Acessar</Button>
      </div> 
      : ""}

    </div>
  )
}