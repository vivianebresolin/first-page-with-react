import styled from 'styled-components';
import Contact from '../../Components/Contact';
import SocialMedia from '../../Components/SocialMedia';
import Nav from '../../Components/Nav';

const Div = styled.div`
    width: 100%;
    height: 9em;
    display: flex;
    justify-content: space-between;

`;

export default function Footer() {
    return (
        <footer>
            <Contact text='Contato' />
            <Div>
                <Nav />
                <SocialMedia />
            </Div>
        </footer>
    )
}