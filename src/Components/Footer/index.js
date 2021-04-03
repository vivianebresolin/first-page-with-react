import styled from 'styled-components';
import backgroundImage from '../../images/sea.jpg';
import SocialMedia from '../../Components/SocialMedia';
import Nav from '../../Components/Nav';

const Contact = styled.div`
    width: 100%;
    height: 17em;
    background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)100%), url(${backgroundImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;        
`;

const Title = styled.p`
    color: white;
    font-size: 1.8rem;        
`;

export default function Footer(props) {
    return (
        <Footer>
            <Contact>
                <Title>{props.title}</Title>
            </Contact>
            <div>
                <Nav></Nav>
                <SocialMedia></SocialMedia>
            </div>
        </Footer>
    )
}