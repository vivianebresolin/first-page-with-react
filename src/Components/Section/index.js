import { Div, SectionDiv } from './styles';
import SmallTextPlusImg from '../SmallTextPlusImg'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faBuffer } from '@fortawesome/free-brands-svg-icons'


export default function Section() {
    return (
        <Div>
            <SectionDiv>
                <SmallTextPlusImg
                    icon={faDesktop}
                    title='Somente para desktop'
                    text='Vamos aprender como utilizar um framework.'
                />
                <SmallTextPlusImg
                    icon={faBuffer}
                    title='Criado com componentes'
                    text='Utilizamos o Styled Components.'
                />
                <SmallTextPlusImg
                    icon={faCheckCircle}
                    title='Fácil aproveitamento'
                    text='Estamos no caminho.'
                />
            </SectionDiv>
        </Div>
    )
}