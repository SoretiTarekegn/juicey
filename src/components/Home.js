// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  position: relative;
  text-align: center;
  padding: 50px;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #fff;
  max-width: 600px;
  margin: 20px auto;
`;

const JuiceImage = styled(animated.img)`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin: 20px 0;
`;

const Home = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Container>
      <VideoBackground autoPlay loop muted>
        <source src="/path/to/your/best.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Title>Welcome to Juice House!</Title>
      <Description>
        Discover the freshest and most delicious juices in town. Our juices are made from high-quality,
        organic ingredients to ensure a delightful and healthy experience.
      </Description>
    </Container>
  );
};

export default Home;
