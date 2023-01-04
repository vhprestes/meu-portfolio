import '../App.css';
// import Header from '../Components/Header'
import Title from '../Components/Title';
import Button from '../Components/Button';

function Main() {
  return (
      <div className="main">
        <Title className="title"/>
        <a href="/about">
          <Button className="BtnAbout btn btn-light btn-outline-red" data-mdb-ripple-color="dark" text="Saiba mais sobre mim" />
        </a>
      </div>
  );
}

export default Main;
