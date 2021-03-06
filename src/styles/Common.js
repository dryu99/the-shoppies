import styled from 'styled-components';

export const Card = styled.div`
  padding: 1.5em;
  background-color: ${p => p.theme.colors.foreground};
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 3px;
`;

export const ListItemButton = styled.button`
  padding: 0.4em 0.75em;
`;