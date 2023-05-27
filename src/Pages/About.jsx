import Textbox from '../Components/Textbox';


function About() {
  const text =
    'Nascido em Paracambi, no interior do Rio de Janeiro, onde resido atualmente. ' +
    ' Sempre fui um entusiasta de tecnologia e programação, mas a princípio optei por seguir a carreira na Industria.' +
    ' Me formei em Manutenção Industrial na UTFPR em 2012, e entrei na UFF para cursar Engenharia de Produção em 2020,' +
    ' Contudo, ao optar pela transição de carreira, iniciei e conclui meus estudos na Trybe e atualmente sou acadêmico de Ciencia da Computação com conclusão prevista para 2026.' +
    ' Sou uma pessoa autodidata e disciplinada, tenho como hobbies a música e a músculação. ';

  const text2 = 'Possuo disponibilidade para trabalho remoto, hibrido ou presencial no Rio de Janeiro (Capital, baixada e sul fluminense) e para mudança caso seja necessário. '
  return (
    <div>
      <div className='aboutContainer'>
        <h1>Sobre mim</h1>
        <Textbox className='about' text={text} />
        <Textbox className='about' text={text2} />

      </div>
    </div>
  );
}

export default About;
