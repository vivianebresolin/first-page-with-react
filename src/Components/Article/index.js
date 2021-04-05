import { Title, Text, Element, Image } from './styles';

export default function Article(props) {
    return (
        <Element reverse={props.reverse}>
            <Text>
                <Title>{props.title}</Title>
                <p>{props.text}</p>
            </Text>
            <Image url={props.url} />
        </Element>
    )
}