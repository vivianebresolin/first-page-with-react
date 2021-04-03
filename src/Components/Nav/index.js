import styled from 'styled-components';

const Div = styled.div`   
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-left: 4rem;
`;

const List = styled.ul`
    color: blue;
    font-size: 0.8rem;
    font-weight: bold;
    display: flex;    
`;

const Links = styled.li`
    margin-left: 1.8rem;
`;

const Paragraph = styled.p`
    color: gray;
    font-size: 0.7rem;
    margin-top: 0.8rem;
`;

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