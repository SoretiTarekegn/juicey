// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/download.jfif';

const ContactContainer = styled.div`
  text-align: center;
  padding: 50px;
  color: #fff; /* Set text color to white for better visibility on the background */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ContactIcon = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
  color: #4caf50;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.2em;
`;

const FullPageBackground = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Set minimum height to cover the entire viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  const instaIcon = process.env.PUBLIC_URL + '/icons/insta.jpg';
  const telegramIcon = process.env.PUBLIC_URL + '/icons/telegram.jpg';
  const phoneIcon = process.env.PUBLIC_URL + '/icons/phone.jpg';
  const emailIcon = process.env.PUBLIC_URL + '/icons/email.jpg';

  return (
    <FullPageBackground>
      <ContactContainer>
        <ContactItem>
          <ContactIcon src={instaIcon} alt="Instagram Icon" />
          <ContactLink href="https://www.instagram.com/soraye151" target="_blank" rel="noopener noreferrer">
            Instagram: @soraye151
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <ContactIcon src={telegramIcon} alt="Telegram Icon" />
          <ContactLink href="https://t.me/Soooorakooy" target="_blank" rel="noopener noreferrer">
            Telegram: @Soooorakooy
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <ContactIcon src={phoneIcon} alt="Phone Icon" />
          <ContactLink href="tel:+251980238866">
            Phone: +251980238866
          </ContactLink>
        </ContactItem>

        <ContactItem>
          <ContactIcon src={emailIcon} alt="Email Icon" />
          <ContactLink href="mailto:juicehouse@gmail.com">
            Email: juicehouse@gmail.com
          </ContactLink>
        </ContactItem>
<p style={{ fontSize:'1.5em' }}>Addres- Dire Dawa arround seido</p>
        <p style={{ fontSize: '1.5em' }}>All rights reserved &copy; 2023</p>
      </ContactContainer>
    </FullPageBackground>
  );
};

export default Contact;
