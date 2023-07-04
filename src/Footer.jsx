import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const Copyrights = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const IconLink = styled.a`
  margin-left: 10px;
  color: white;
`;

const P = styled.p`
    color: white;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Copyrights>
        <P>&copy; 2023 Md. Tarek Hasan(Developer). All rights reserved.</P>
      </Copyrights>
      <Links>
        <IconLink href="#home"><img width={25} height={25} src="https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-home-4341294_120570.png" alt="" /></IconLink>
        <IconLink href="#"><img width={25} height={25} src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png" alt="" /></IconLink>
        <IconLink href="#"><img width={25} height={25} src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579542-yumminkysocialmedia22_83078.png" alt="" /></IconLink>
        <IconLink href="#"><img width={25} height={25} src="https://cdn.icon-icons.com/icons2/373/PNG/256/Whatsapp_37229.png" alt="" /></IconLink>
        <IconLink href="#"><img width={25} height={25} src="https://cdn.icon-icons.com/icons2/805/PNG/512/linkedin_icon-icons.com_65929.png" alt="" /></IconLink>
        <IconLink href="#"><img width={25} height={25} src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491580651-yumminkysocialmedia28_83061.png" alt="" /></IconLink>
      </Links>
    </FooterContainer>
  );
};

export default Footer;
