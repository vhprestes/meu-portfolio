import Textbox from '../Components/Textbox';
import Image from '../Components/Image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function About() {
  const text =
    'Nascido em Paracambi, no interior do Rio de Janeiro, aonde resido atualmente. ' +
    ' Sempre fui um entusiasta de tecnologia e programação, mas a princípio optei por seguir a carreira na Industria.' +
    ' Me formei em Manutenção Industrial na UTFPR em 2012, e entrei na UFF para cursar Engenharia de Produção em 2020,' +
    ' atualmente estou com esse curso trancado no 5 período, pois optei pela transição de carreira.' +
    ' Sou uma pessoa autodidata e disciplinada, tenho como hobbys a música e a músculação.';

  const text2 = 'Possuo disponibilidade para trabalho hibrido ou presencial no Rio de Janeiro (Capital, baixada e sul fluminense) e para mudança caso seja necessário. '
  return (
    <div>
      <Header />
      <div className='aboutContainer'>
        <h1>Sobre mim</h1>
        <Textbox className='about' text={text} />
        <Textbox className='about' text={text2} />

      </div>
      <Footer />
    </div>
  );
}

export default About;