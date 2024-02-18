import { CardPerson } from "./cardPerson" 
import { People as people } from "./people"
import { Header } from "./header"

import dogImg from "../assets/dogIllustration.svg"
import socialImg from "../assets/icons/socialIcons.svg"
import { Button } from "./button"

export function Blog() {

  function designerPage() {
    window.location.replace("https://www.figma.com/@danypsd_")
  }

  return (
    <>
      <ul className="flex justify-center items-center gap-[40px]">
        <CardPerson 
          name={people.firstPerson.name}
          description={people.firstPerson.description}
          img={people.firstPerson.img}
          alt={people.firstPerson.alt}
          descriptionPet={people.firstPerson.descriptionPet}
        />
        <CardPerson 
          name={people.secondePerson.name}
          description={people.secondePerson.description}
          img={people.secondePerson.img}
          alt={people.secondePerson.alt}
          descriptionPet={people.secondePerson.descriptionPet}
        />
        <CardPerson 
          name={people.thirdPerson.name}
          description={people.thirdPerson.description}
          img={people.thirdPerson.img}
          alt={people.thirdPerson.alt}
          descriptionPet={people.thirdPerson.descriptionPet}
        />
      </ul>

      <div className="flex pt-[54px] justify-around">
        <div className="flex-col">
          <h1 className="font-openSans font-bold text-[44px] text-body pb-[40px]">Não perca as nossas <br /> atualizações!</h1>
          <p className="font-openSans text-[18px] text-gray-700 mb-[42px]">Cadastre-se para receber novidades, novas ferramentas, <br /> descontos, atualizações...</p>
          <p className="font-openSans text-[18px] text-gray-700 mb-[19px]"><span className="bg-newYellow/20 p-[4px] rounded-[10px] mr-[8px]">01</span>Receba atualizações em primeira mão</p>
          <p className="font-openSans text-[18px] text-gray-700 mb-[19px]"><span className="bg-newYellow/20 p-[4px] rounded-[10px] mr-[8px]">02</span>Obtenha cupons de descontos </p>
          <p className="font-openSans text-[18px] text-gray-700"><span className="bg-newYellow/20 p-[4px] rounded-[10px] mr-[8px]">03</span>Leia artigos sobre temas relevantes</p>
          <input type="email"   placeholder="Insira seu email..." className="text-center outline outline-body outline-2 rounded-[30px] min-w-[500px] h-[60px] text-openSans mt-[50px]"/>
        </div>
        <img src={dogImg} alt="" className="w-[521px] h-[539px]"/>
      </div>

      <div className="bg-body/20 pt-[25px] h-[530px] rounded-t-[32px]">
        <div className="flex justify-around mb-[66px]">
          <Header />
          <button><img src={socialImg} alt="" /></button>
        </div>
        <div className="px-[60px] flex justify-around">
          <div className="flex flex-col gap-[20px]">
            <p className="text-body font-openSans text-[20px] max-w-[181px] px-[3px] py-[1px] bg-newYellow rounded-[7px]">Entre em contato:</p>
            <p className="text-body font-openSans text-[20px]">Email: email@gmail.com</p>
            <p className="text-body font-openSans text-[20px]">Phone: 12 3456 - 7890</p>
            <p className="text-body font-openSans text-[20px]">Endereço: Rua XXX, YYYY - Brasil</p>
          </div>
          <div className="w-[693px] h-[185px] bg-white rounded-[14px] flex items-center justify-center gap-[20px]">
            <input type="email" placeholder="Email" className="font-openSans text-[18px] text-body/74 w-[285px] h-[69px] rounded-[14px] outline-none outline-body text-center"/>
            <Button black className=" rounded-[14px]">
              Inscreva-se na Newsletter
            </Button>
          </div>
        </div>


        <div className="max-w-[1171px] m-auto">
        <hr className="border-body my-[50px]  lg:px-[60px] m-auto"/>
        <div className="flex  gap-[50px]">
          <p onClick={designerPage}>© 2023 <button>Danielle Fragas</button> - Designer. Todo os direitos reservados.</p>
          <p>Clark - Programador</p>
        </div>
        </div>
      </div>
    </>
  )
}