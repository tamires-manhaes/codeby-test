import styled from 'styled-components';

export const Tag = styled.div`
  background-color: var(--tag-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 20px auto 5px;
  max-width: 350px;
  border-radius: 25px;

  > span {
    color: var(--tag-textColor);
  }
`;
