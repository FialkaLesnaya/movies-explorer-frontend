import Footer from 'components/common/Footer/Footer';
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import Techs from './Techs/Techs';
import AboutProject from './AboutProject/AboutProject';

function Main() {
  return (
    <div>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
