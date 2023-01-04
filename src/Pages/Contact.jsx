import Button from '../Components/Button';
import Textbox from '../Components/Textbox';
import Image from '../Components/Image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Contact() {

  const text = "Me envie um email"
  return (
    <div>
<Header />
    <div>
      <div className='contact'>
      <h1>Contato</h1>
      <h2>Quer entrar em contato comigo?</h2>
      {/* <Textbox text={text} /> */}
      <a href="mailto:vhprestes@gmail.com">
        <Button className="BtnAbout btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text={text} />
      </a>
      <br />
      <br />

      <h3>
        Também pode entrar em contato comigo através das minhas redes sociais:
      </h3>
      <br />
      </div>
<div className='linksContact' >
      <a href="https://www.linkedin.com/in/vhprestes/" target="_blank">
        <i
          className="fab fa-linkedin fa-4x fa-inverse"
          src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/linkedin.svg"
          alt="Linkedin"
        />
      </a>
        {'              '}
      <a href="https://instagram.com/vhprestes" target="_blank">
        <i
          className="fab fa-instagram fa-4x fa-inverse"
          src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
          alt="Instagram"
        />
      </a>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default Contact;
