import Button from './Button';

function Header({ handleComponentChange }) {
  return (
    <header className='header'>
      
      <i className="fa-solid fa-house-user fa"  onClick={() => handleComponentChange('main')}>
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="main" />
      </i>

      <a href="https://github.com/vhprestes/" target="_blank" className="fa-brands fa-github fa fa-inverse">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Github" />
      </a>



      <i className="fa fa-briefcase fa-inverse"  onClick={() => handleComponentChange('projects')}>
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Projetos" />
      </i>

      <i className="fa-solid fa-phone fa fa-inverse "  onClick={() => handleComponentChange('contact')}>
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Contato" onClick={() => handleComponentChange('contact')} />
      </i>


      <a href="https://linkedin.com/in/vhprestes/" target="_blank" className="fa-brands fa-linkedin fa fa-inverse ">
        <Button className="BtnHeader" data-mdb-ripple-color="dark" text="Linkedin" />
      </a>

    </header>
  );
}

export default Header;
