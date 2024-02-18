import { Button } from "./button";


import dogAndCatIllustration from "../assets/dogAndCatIllustration.svg"

export function Initial() {

  return(
    <>
      <div className="flex  pt-[67px]">
        <div className="">
          <h1 className="font-alata text-[69px] text-newBlack">
            O melhor suporte no cuidado para seu <br />
            <span className="text-newYellow font-paytoneOne ">
              melhor amigo
            </span>
          </h1>
          <p className="font-openSans text-[21px] font-light text-body py-[38px]">
            Aqui, você encontrará respostas para todas as suas dúvidas, desde a escolha 
            da melhor ração até dicas essenciais para garantir o bem-estar do seu companheiro peludo. 
          </p>

          <Button>Acessar</Button>
        </div>

        <img src={dogAndCatIllustration} alt="a photo of a dog and cat togethers" />
      </div>
    </>
  )
}