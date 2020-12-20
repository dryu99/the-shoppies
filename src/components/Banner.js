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
  font-size: 1.5em;
`;

const NotificationContainer = styled.div`
  color: #00cc99;
  text-align: center;
`;

const AuthorContainer = styled.div`
  margin: 0.8em;
  color: white;
  text-align: right;
  font-size: 0.9em;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const Banner = React.memo(({ text }) => {
  return (
    <BannerContainer>
      <BrandContainer>
        <StyledLink href="/">The Shoppies 🏆</StyledLink>
      </BrandContainer>
      <NotificationContainer>
        <h3>{text}</h3>
      </NotificationContainer>
      <AuthorContainer>
        <StyledLink href={'https://en.wikipedia.org/wiki/Daniel_(Elton_John_song)'}>
          Daniel Ryu
        </StyledLink> 2020
      </AuthorContainer>
    </BannerContainer>
  );
});

Banner.displayName = 'Banner';

export default Banner;