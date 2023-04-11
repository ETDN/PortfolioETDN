import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #fe9fb3;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-family: var(--arame);
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #516d9d;
  opacity: 0.9;
  max-width: 400px;
  height: 650px;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  font-family: var(--arame);
  color: white;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  font-family: var(--arame);
  margin-bottom: 8px;
  font-size: 14px;
  color: white;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  font-family: var(--spacemono);

  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormInputMsg = styled.input`
  font-family: var(--spacemono);
  width: auto;
  font-size: 1rem;
  font-weight: 200;
  padding: 30px 5px;
  margin-bottom: 32px; /* include padding and border in element's total width */
  word-wrap: break-word; /* break words that exceed the input's width */
  white-space: pre-wrap; /* preserve line breaks and wrap text to the next line */
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #fe9fb3;
  opacity: 0.9;
  padding: 16px 0;
  font-weight: 600;
  font-family: var(--arame);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: blue;
  font-size: 14px;
`;
