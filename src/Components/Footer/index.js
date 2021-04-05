import Contact from '../../Components/Contact';
import SocialMedia from '../../Components/SocialMedia';
import Nav from '../../Components/Nav';
import { Div } from './styles';
import backgroundImage from '../../images/sea.jpg';

export default function Footer() {
    return (
        <footer>
            <Contact text='Contato' bgImage={backgroundImage} />
            <Div>
                <Nav />
                <SocialMedia />
            </Div>
        </footer>
    )
}