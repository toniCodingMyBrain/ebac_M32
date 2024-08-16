import styled from "styled-components";

export const AdicionarContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 8px 0;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  margin: 16px 0;

  .button_stack {
    justify-content: end;
    margin-top: 8px;
  }
`;
