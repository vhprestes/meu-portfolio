import Button from './Button';

function Header() {
  return (
    <header className='header'>

      <a href="/" className="fa-solid fa-house-user fa fa-inverse ">
        <Button className="BtnHeader" text="Home" />
      </a>
      <a href="/">
        <Button className="BtnHeader btn btn-light btn-outline-red" text="Home" />
      </a>

      <a href="https://github.com/vhprestes/" target="_blank" className="fa-brands fa-github fa fa-inverse ">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Github" />
      </a>
      <a href="https://github.com/vhprestes/" target="_blank">
        <Button className="BtnHeader btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Github" />
      </a>

      <a href="/portfolio" className="fa fa-inverse fa-solid fa-briefcase">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Projetos" />
      </a>
      <a href="/portfolio">
        <Button className="BtnHeader btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Projetos" />
      </a>

      <a href="/contact" className="fa-solid fa-phone fa fa-inverse ">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Contato" />
      </a>
      <a href="/contact">
        <Button className="BtnHeader btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Contato" />
      </a>

      <a href="https://linkedin.com/in/vhprestes/" target="_blank">
        <Button className="BtnHeader BtnHeader btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Linkedin" />
      </a>
      <a href="https://linkedin.com/in/vhprestes/" target="_blank" className="fa-brands fa-linkedin fa fa-inverse ">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Linkedin" />
      </a>

    </header>
  );
}

export default Header;
