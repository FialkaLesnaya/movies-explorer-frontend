import Footer from 'components/common/Footer/Footer';
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import Techs from './Techs/Techs';
import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';

function Main() {
  return (
    <div>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
