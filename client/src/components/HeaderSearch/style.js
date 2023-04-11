import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 80px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > a {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    background-color: transparent;
    border: none;

    font-family: 'Roboto Slab', serif;
    font-weight: bold;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid  ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
  }

`;