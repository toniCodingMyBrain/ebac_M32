import styled from "styled-components";

export type Link = {
  typelink: "add" | "remove";
};

export const LinkButtonContainer = styled.div<Link>`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 26px;
  margin-bottom: ${(props) => {
    return props.typelink === "remove" ? "26" : "112";
  }}px;
  text-align: center;

  .button {
    background-color: cornflowerblue;
    color: #ffffff;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
