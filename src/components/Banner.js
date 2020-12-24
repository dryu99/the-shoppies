import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5em;
  background-color: ${p => p.theme.colors.secondary};
  position: fixed;
  top: 0;
  & > div {
    margin: 20px;
    flex: 1;
  }
`;

const BrandContainer = styled.div`
  font-size: 1.5em;
`;

const NotificationContainer = styled.div`
  color: ${p => p.theme.colors.primary};
  text-align: center;
`;

const AuthorContainer = styled.div`
  color: white;
  text-align: right;
  font-size: 0.9em;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;

const Banner = React.memo(({ text }) => {
  // eslint-disable-next-line no-undef
  const homeURL = process.env.NODE_ENV === 'development' ? '/' : '/the-shoppies-2021/';

  return (
    <BannerContainer>
      <BrandContainer>
        <StyledLink href={homeURL}>The Shoppies 🏆</StyledLink>
      </BrandContainer>
      <NotificationContainer>
        <h3>{text}</h3>
      </NotificationContainer>
      <AuthorContainer>
        <StyledLink href="https://en.wikipedia.org/wiki/Daniel_(Elton_John_song)">
          Daniel Ryu
        </StyledLink> 2020
      </AuthorContainer>
    </BannerContainer>
  );
});

Banner.displayName = 'Banner';

export default Banner;