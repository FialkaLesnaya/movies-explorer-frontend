import Footer from 'components/common/Footer/Footer';
import AboutMe from './AboutMe/AboutMe';
import './Main.css';
import Techs from './Techs/Techs';
import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Header from 'components/common/Header/Header';

function Main() {
  return (
    <div>
      <Header isMainPage/>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default Main;
