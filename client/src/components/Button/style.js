import styled from "styled-components";

export const Container = styled.button`
  min-width: 100px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: 0;
  padding: 0 16px;
  border-radius: 0 10px 10px 0;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;