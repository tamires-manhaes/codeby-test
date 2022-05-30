import styled from 'styled-components';

export const Card = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px auto 30px;
  }

  .imgBox {
    margin-right: 40px;
  }

  .imgBox img {
    width: 160px;
    height: 160px;
    border: 1px solid var(--border-color);
  }

  .dataBox {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    > h3 {
      color: #000;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .listPrice {
      color: var(--listPrice-color);
      font-size: 14px;
    }

    .sellingPrice {
      color: #000;
    }
  }
`;
