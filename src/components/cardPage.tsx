import { Card } from "./card";
import { CardList } from "./cardList"; 

export function CardPage() {

  const list = CardList

  return (
    <div className="pt-[69px]">
      <h3 className="align-center text-center font-openSans font-bold text-[36px] font-body">Saiba dicas essenciais para dar o <br /> conforto que o seu pet merece!</h3>

      <ul className="py-[45px] flex">
        <Card 
          logo={list.adestramento.logo} 
          alt={list.adestramento.alt} 
          description={list.adestramento.description} 
          title={list.adestramento.tittle} 
        />

        <Card 
          logo={list.alimentacao.logo} 
          alt={list.alimentacao.alt} 
          description={list.alimentacao.description} 
          title={list.alimentacao.title} 
        />

        <Card 
          logo={list.adocao.logo} 
          alt={list.adocao.alt} 
          description={list.adocao.description} 
          title={list.adocao.title} 
        />

      </ul>

      <ul className="py-[45px] flex ">
        <Card 
          logo={list.saude.logo} 
          alt={list.saude.alt} 
          description={list.saude.description} 
          title={list.saude.title} 
        />
      <Card 
          logo={list.cuidados.logo} 
          alt={list.cuidados.alt} 
          description={list.cuidados.description} 
          title={list.cuidados.title} 
        />

        <Card
          logo={list.curiosidades.logo} 
          alt={list.curiosidades.alt} 
          description={list.curiosidades.description} 
          title={list.curiosidades.title} 
        />
      </ul> 
    </div>
  )
}