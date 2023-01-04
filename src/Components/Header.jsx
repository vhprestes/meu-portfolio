import Button from './Button';

function Header({ setCurrentComponent }) {
  return (
    <header className='header'>

      <a href="/" className="fa-solid fa-house-user fa fa-inverse ">
        <Button className="BtnHeader" onClick={() => setCurrentComponent('main')} text="Home" />
      </a>
      <a href="/">
        <Button className="BtnHeader btn btn-light btn-outline-red" onClick={() => setCurrentComponent('main')} text="Home" />
      </a>

      <a href="https://github.com/vhprestes/" target="_blank" className="fa-brands fa-github fa fa-inverse">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Github" />
      </a>
      <a href="https://github.com/vhprestes/" target="_blank">
        <Button className="BtnHeader btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Github" />
      </a>



      <a className="fa fa-inverse fa-solid fa-briefcase">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Projetos" onClick={() => setCurrentComponent('projects')} />
      </a>
      <a>
        <Button className="BtnHeader btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Projetos" onClick={() => setCurrentComponent('projects')} />
      </a>



      <a className="fa-solid fa-phone fa fa-inverse ">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Contato" onClick={() => setCurrentComponent('contact')} />
      </a>
      <a>
        <Button className="BtnHeader btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Contato" onClick={() => setCurrentComponent('contact')} />
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
