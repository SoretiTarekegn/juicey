// src/components/Menu.js
import React from 'react';
import styled, { css } from 'styled-components';

// Import your item images
import item1Image from '../assets/avocado.jpg';
import item2Image from '../assets/orange.jpg';
import item3Image from '../assets/sprice1.jpg';
import item4Image from '../assets/milke.jpg';
import item5Image from '../assets/strawberry.jpg';

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: center;
  padding: 50px;
`;

const MenuItem = styled.div`
  flex: 0 0 calc(33.333% - 20px);
  margin-bottom: 30px;
  box-sizing: border-box;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s ease; /* Add a smooth transition effect */

  ${(props) =>
    props.hover &&
    css`
      &:hover {
        transform: scale(1.1);
      }
    `}
`;

const ItemTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const ItemDescription = styled.p`
  font-size: 1em;
  color: #555;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <ItemImage src={item1Image} alt="Item 1" hover />
        <ItemTitle>Avocado</ItemTitle>
        <ItemDescription>Price 300ETB.</ItemDescription>
      </MenuItem>

      <MenuItem>
        <ItemImage src={item2Image} alt="Item 2" hover />
        <ItemTitle>Orange</ItemTitle>
        <ItemDescription>Price 250ETB.</ItemDescription>
      </MenuItem>

      <MenuItem>
        <ItemImage src={item3Image} alt="Item 3" hover />
        <ItemTitle>Sprice</ItemTitle>
        <ItemDescription>Price 450ETB.</ItemDescription>
      </MenuItem>

      <MenuItem>
        <ItemImage src={item4Image} alt="Item 4" hover />
        <ItemTitle>MilkeShake</ItemTitle>
        <ItemDescription>Price 500ETB.</ItemDescription>
      </MenuItem>

      <MenuItem>
        <ItemImage src={item5Image} alt="Item 5" hover />
        <ItemTitle>strawberry</ItemTitle>
        <ItemDescription>Price 550ETB.</ItemDescription>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
