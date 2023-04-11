import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px 0 0 10px;

  > input {
    height: 56px;
    width: 300px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .select{
    height: 56px;
    width: 120px;
    pointer-events:none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
  }

  > svg {
      margin-left: 16px;
    }
`;