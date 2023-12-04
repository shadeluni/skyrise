import RegisterForm from '../Register/RegisterForm'
import './home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook} from "react-icons/fa";
import { SiYoutubemusic }
from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import airplane from '../../img/airplane2.jpg'
import { FaArrowDownLong } from "react-icons/fa6";
import Reservation from '../Reservation/Reservation';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='home'>
        <nav className='nav'>
            <h5>SkyRise</h5>
            <div className="nav__menu">
            <FontAwesomeIcon icon={faBars} />
            <span>MENU</span>
            </div>
            {/* <Button className='nav__menu--btn'>Entrar</Button> */}
            <Link to={'/cliente'}><Button className='nav__menu--btn'>Entrar</Button></Link>
        </nav>
        <section className="hero">
            <h1>SkyRise</h1>
            <div className="hero__text">
            <h5 className='hero__text--left'>Viaja ligero, sueña en grande <br />
            Tu viaje, nuestra pasión</h5>
            <h5>Viaja ligero, sueña en grande <br />
            Tu viaje, nuestra pasión</h5>
            </div>
            <img src={airplane} alt="plane" className="hero__image" />
            <div className="hero__socials">
                <Button className='hero__socials--icon'>
                <AiFillTwitterCircle />
                </Button>
                <Button className='hero__socials--icon'>
                <FaFacebook />
                </Button>
                <Button className='hero__socials--icon'>
                <RiInstagramFill/>
                </Button>
                <Button className='hero__socials--icon'>
                <SiYoutubemusic/>
                </Button>
            </div>
        </section>
        <Button className='scroll_button'>
            <FaArrowDownLong/>
        </Button>
    </div>
    <Reservation/>
    {/* <RegisterForm/> */}
    <Footer/>
    </>
  )
}

export default Home