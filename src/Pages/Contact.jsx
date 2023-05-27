import Button from '../Components/Button';
import Textbox from '../Components/Textbox';
import Image from '../Components/Image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Contact() {

  const text = "Me envie um email"
  return (
    <div>
    <div>
      <div className='contact'>
      <br />

      <h1>Contato</h1>
      <br />
 

      <h2>Quer entrar em contato comigo?</h2>
      <br />
      <br />

      <a href="mailto:vhprestes@gmail.com">
        <Button className="BtnAbout btn btn-light btn-outline-blue" data-mdb-ripple-color="dark" text={text} />
      </a>
      <br />
      <br />
      <br />

      <h3>
        Também pode entrar em contato comigo através do meu Linkedin ou do meu Github
      </h3>
      <br />
      </div>

    </div>
    </div>
  );
}

export default Contact;
