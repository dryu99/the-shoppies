import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5em;
  background-color: #343a40;
  position: fixed;
  top: 0;
  & > div {
    flex: 1;
  }
`;

const BrandContainer = styled.div`
  margin: 1em;  
`;

const StyledLink = styled.a`
  font-size: 1.5em;
  color: white;
`;

const StyledH3 = styled.h3`
  text-align: center;
  color: white;
`;

const Banner = ({ text }) => {
  return (
    <BannerContainer>
      <BrandContainer>
        <StyledLink>The Shoppies 👜</StyledLink>
      </BrandContainer>
      <div>
        <StyledH3>{text}</StyledH3>
      </div>

      {/* empty div here so we can center H3 with flex */}
      <div></div>
    </BannerContainer>
  );
};

export default Banner;