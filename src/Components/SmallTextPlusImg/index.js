import { Element, Title } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function SmallTextPlusImg(props) {
    return (
        <Element>
            <FontAwesomeIcon icon={props.icon} size='4x' />
            <Title>{props.title}</Title>
            <p>{props.text}</p>
        </Element>
    )
}