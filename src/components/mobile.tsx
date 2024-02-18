import { Button } from "./button"

import personIcon from "../assets/icons/personIcon.svg"
import dogAndCatImg from "../assets/dogAndCatBallons.svg"

export function Mobile(){

  return (
    <div className="flex flex-col mt-[30px] px-[22px] md:max-w-[890px] md:mx-auto md:items-center">
      <div className="flex gap-[4px] items-baseline mb-[7px]">
        <h4 className="font-openSans font-bold text-[26px] text-body">Login</h4>
        <img src={personIcon} alt="pessoa em formato de icone" />
      </div>
      <p className="font-openSans text-[14px] font-normal">Faça login para acessar a sua conta</p>

      <img src={dogAndCatImg} alt="um chachorro e um gato flutuando com balões de gás helio" 
        className="min-w-[438px] min-h-[438px] "
      />

      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <h1 className="flex justify-center gap-[10px]">
            <span className="font-paytoneOne text-body text-[60px]">Pet</span>
            <span className="font-paytoneOne text-newYellow text-[60px]">Zen</span>
          </h1>
          <p className="font-openSans font-light text-body text-[16px] mt-[16px] mb-[25px] max-sm:w-[317px]
            md:w-[603px]
          ">
            Aqui, você encontrará respostas para todas 
            as suas dúvidas, desde a escolha da melhor 
            ração até dicas essenciais para garantir o 
            bem-estar do seu companheiro peludo. 
          </p>
        </div>
        <Button>Acessar</Button>
      </div>
    </div>
  )
}