import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5em;
  background-color: #343a40;
  position: fixed;
  top: 0;
`;

const BrandContainer = styled.div`
  margin: 1em;  
`;

const StyledLink = styled.a`
  font-size: 1.5em;
  color: white;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BrandContainer>
        <StyledLink>The Shoppies 👜</StyledLink>
      </BrandContainer>
    </BannerContainer>
  );
};
export default Banner;