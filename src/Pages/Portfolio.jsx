import Card from '../Components/Card';

function Portfolio() {
  const text1 =
    'Projeto: Car Shop - Utilizando Typescript seguindo os princípios da Programação Orientada a Objetos, foi construido uma API com CRUD para gerenciamento de uma concessionária de veículos. Utilizando MongoDB e Mongoose para gerenciamento do banco de dados.';

  const text2 =
    'Projeto: Trybe Futebol Clube - O TFC é um site informativo sobre partidas e classificações de futebol. Foi construido todo backend dockerizado, utilizando modelagem de dados através do Sequelize, CRUD e JWT.';

  const text3 =
    'Projeto: Calculadora - Calculadora feita utilizando React, Javascript e CSS. Sem utilização de hooks, foi feito como ferramenta de treino de javascript vanilla.';

  const text4 =
    'Projeto: BLOGS API - Uma API de blogs criada utilizando Typescript e Sequelize com CRUD, seguindo os princípios do RESTfull. ';

  const text5 = 'Projeto: Trybers and Dragons - Um pequeno projeto feito com intuito de aplicar os conhecimentos adquiridos em arquitetura SOLID e os principios de Programação Orientada a Objetos em uma estrutura de jogos de RPG.'

  const text6 = 'Projeto: Trybesmith - Um projeto de uma API CRUD de loja de itens medievais. Utilizando Typescript, MySQL, Express, JWT e Docker.'
  return (
    <div>
      <h1 className="titleport">Projetos</h1>
      <h4>
        Essa é a lista com apenas alguns dos projetos que conclui no último ano:
      </h4>
      <Card
        // img="https://picsum.photos/200/300"
        // alt="imagem"
        text={text1}
        link="https://github.com/vhprestes/project-car-shop"
      />
      <Card text={text2} link="https://github.com/vhprestes/Projeto-TFC" />
      <Card text={text3} link="https://github.com/vhprestes/calculator" />
      <Card text={text4} link="https://github.com/vhprestes/blogs-api" />
      <Card
        text={text5}
        link="https://github.com/vhprestes/trybers-and-dragons"
      />
            <Card
        text={text6}
        link="https://github.com/vhprestes/trybesmith"
      />
    </div>
  );
}

export default Portfolio;
