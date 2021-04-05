import { ContactDiv, Paragraph } from './styles';

export default function Contact(props) {
    return (
        <ContactDiv bgImage={props.bgImage}>
            <Paragraph>{props.text}</Paragraph>
        </ContactDiv>
    )
}