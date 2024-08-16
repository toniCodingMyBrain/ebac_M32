import styled from "styled-components";

export const RemoveContainer = styled.div`
  max-width: 1024px;
  width: 550px;
  margin: 0 auto;
  padding: 8px;

  h1 {
    text-align: center;
    margin-bottom: 8px;
  }
`;

export const ButtonRemoveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  button {
    border-radius: 12px;
  }
`;

export const ContatosListContainer = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 12px;
  background-color: #ccc;
  margin: 0 auto;
  padding: 8px;
  overflow: hidden;
  overflow-y: scroll;
`;
