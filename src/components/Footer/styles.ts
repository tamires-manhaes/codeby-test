import styled from 'styled-components';

export const Ft = styled.footer`
  height: 100%;
  width: 100%;
  margin: 10px auto;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 15px 80px;
      background-color: var(--button-bg-color);
      border: none;
      border-radius: 8px;
      pointer-events: all;
      cursor: pointer;

      span {
        font-size: 20px;
        color: #fff;
      }
    }
  }
`;
