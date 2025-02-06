import styled from 'styled-components';

export const Background = styled.div`
  height: 100%;
  max-width: 70vw;
  margin: auto;
  padding-top: 20px;
  background-color: rgb(227, 238, 255);
`;

export const Container = styled.div`
  display: grid;
  max-width: 50vw;
  grid-template-columns: max-content 1fr;
  gap: 40px;
  margin: auto;
`;

export const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: auto 0;
`;

export const Name = styled.div`
  display: flex;
  gap: 10px;
`;
