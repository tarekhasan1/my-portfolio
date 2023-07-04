import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
display: flex;
justify-content: center;
`
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
position: fixed;
`
const Links = styled.div`
display: flex;
align-items: center;
gap: 50px;
`

const Icons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

const Logo = styled.img`
height: 50px;
`

const Icon = styled.img`
width: 25px;
cursor: pointer;
`

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`

const ListItem = styled.li`
cursor: pointer;
`

const A = styled.a`
text-decoration: none;
color: white;
`

const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #310278;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src='https://logodix.com/logo/1618842.png'></Logo>
                <List>
                <ListItem><A href='#home'>Home</A></ListItem>
                <ListItem><A href='#about'>About</A></ListItem>
                <ListItem><A href='#skills'>Skills</A></ListItem>
                <ListItem><A href='#works'>Works</A></ListItem>
                <ListItem><A href='#contact'>Contact</A></ListItem>
                </List>
                </Links>
                <Icons>
                    <Icon src='https://cdn-icons-png.flaticon.com/512/1400/1400310.png'></Icon>
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    );
};

export default Navbar;