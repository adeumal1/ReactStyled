import React from "react";
import styled, {css} from "styled-components";

const TitleStyled = styled.h1`
  color: black;
  font-size: 20px;
  ${({ primary }) =>
    primary &&
    css`
      background-color: indianred;
      border: 1px solid blue;
      font-size: 20px;
    `} &:hover {
    background-color: yellowgreen;
  }
`

const Title = ({children, primary}) => {
  return (
    <TitleStyled primary={primary}>{children}</TitleStyled>
  )
}

export default Title;
