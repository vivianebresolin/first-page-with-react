import { Div, List, Links, Paragraph } from './styles';

export default function Nav() {
    return (
        <Div>
            <List>
                <p>About</p>
                <Links>Contact</Links>
                <Links>Terms of Use</Links>
                <Links>Privacy Policy</Links>
            </List>
            <Paragraph>&copy;Your Website 2020. All Rights Reserved.</Paragraph>
        </Div>
    )
}