import { Button } from "./button";

import catImg from "../assets/catIllustration.svg"
import phoneImg from "../assets/phoneIllustration.svg"
import clockImg from "../assets/icons/clockAlarm.svg"
import appImg from "../assets/icons/interfaceApp.svg"
import designImg from "../assets/icons/confetti.svg"
import googleImg from "../assets/icons/google.svg"

export function OurApp() {
  return(
    <div className="">

      <div className="bg-finalDiv max-[1240px] max-h-[308px] flex relative  rounded-lg">
        <div className="pl-[60px] py-[37px]">
          <h1 className="font-openSans font-bold text-[30px]">Você e o seu pet ainda mais conectados!</h1>
          <p className="font-openSans font-regular text-[20px] py-[22px]">Nosso app simplifica a vida do tutor, registrando o histórico <br /> de saúde do pet, 
            gerenciando gastos mensais e conectando <br /> você a uma comunidade animada de pais de pets.
          </p>
          <Button children="Acesse agora!" />
        </div>

        <img src={catImg} alt="Um gato em uma estante" className="w-[544px] h-[506px] absolute bottom-[-7rem] right-[-4px] top-[-31px]" />
      </div>  

      <div className="flex mt-[124px]">
        <img src={phoneImg} alt="Image do nosso aplicativo móvel" className="max-w-[578.91px] max-h-[580.19px]"/>

        <div className="ml-[154px]">
          <h1 className="font-openSans font-bold text-[48px] text-body">BAIXE O NOSSO APP!</h1>

          <div className="pt-[33px]">
            <div>
              <div className="flex gap-[10px] items-center">
                <img src={clockImg} alt="icone de lembrete" className=" w-[24px] h-[24px]" />
                <h3 className="font-openSans font-semibold text-[20px] text-newBlack pb-[10px]" >Alertas e lembretes inteligentes</h3>
              </div>
              <p className="font-openSans text-[18px] text-ourAppColor" >Receba notificações personalizadas para vacinas, consultas veterinárias e outras necessidades, garantindo que você nunca perca um cuidado essencial para o seu pet.</p>
            </div>

            <div>
              <div className="flex gap-[10px] items-center pt-[15px]">
                <img src={appImg} alt="icone de aplicativo" className="w-[24px] h-[24px]"  />
                <h3 className="font-openSans font-semibold text-[20px] text-newBlack">Interface amigável para todos</h3>
              </div>
              <p className="font-openSans text-[18px] text-ourAppColor pb-[10px]">Nosso App é projetada para ser intuitiva, permitindo que todos, independentemente da experiência digital, possam aproveitar ao máximo os recursos do aplicativo.</p>
            </div>
            <div>
              <div className="flex gap-[10px] items-center pt-[15px]">
                <img src={designImg} alt="brilho mágico" className="w-[24px] h-[24px]"  />
                <h3 className="font-openSans font-semibold text-[20px] text-newBlack">Design intuitivo e atraente</h3>
              </div>
              <p className="font-openSans text-[18px] text-ourAppColor pb-[10px]">Desfrute de uma interface visualmente agradável e fácil de navegar, projetada para proporcionar uma experiência fluida e atraente a cada usuário.</p>
            </div>
            
            <button className="flex w-[208px] h-[60px] items-center gap-[12px] px-[22px] py-[14px] shadow-xl">
              <p className="bg-white">Download App</p>
              <img src={googleImg} alt="baixe para android" className="w-[25px] h-[21px]"/>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}