import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const ContactBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a40;
`;

export const ContactContent = styled.div`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
`;

export const ContactH1 = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-family: var(--arame);
  margin-bottom: 10px;
  z-index: 3;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ContentP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-family: var(--arame);
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContactBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const FormWrap = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  z-index: 3;

  :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  display: block;
  width: 100%;

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
  font-family: var(--spacemono);
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #333;
`;

export const FormInputMsg = styled.textarea`
  font-family: var(--spacemono);
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;
  background-color: #f2f2f2;
  font-size: 16px;
  color: #333;
  word-wrap: break-word;
`;

export const FormButton = styled.button`
  font-family: var(--spacemono);
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: white;
  font-size: 16px;
  color: #516d9d;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const BackButton = styled.button`
  font-family: var(--spacemono);
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: white;
  font-size: 16px;
  color: #516d9d;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: blue;
  font-size: 14px;
`;
