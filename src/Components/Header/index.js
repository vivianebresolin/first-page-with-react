import styled from 'styled-components';
import backgroundImage from '../../images/sea.jpg';

export default function Header() {
    const Header = styled.header`
        width: 100%;
        height: 18em;
        background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)), url(${backgroundImage});
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;        
    `;

    const Paragraph = styled.p`
        color: white;
        font-size: 1.8rem;
        font-family: 'Roboto', sans-serif;
    `;

    return (
        <Header>
            <Paragraph>Minha primeira página com React</Paragraph>
        </Header>
    )
}