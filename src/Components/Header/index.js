import { HeaderDiv, Paragraph } from './styles';
import backgroundImage from '../../images/sea.jpg';

export default function Header() {
    return (
        <HeaderDiv bgImage={backgroundImage}>
            <Paragraph>Minha primeira página com React</Paragraph>
        </HeaderDiv>
    )
}