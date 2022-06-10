import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 420px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  z-index: 1;

  @media screen and (max-width: 480px) {
    margin-left: 24px;
    margin-top: 24px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 420px) {
    padding: 10px;
  }
`;

export const Form = styled.div`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 32px;
    border-radius: 30px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 420px) {
    padding: 32px 32px;
    max-width: 340px;
    margin-top: 80px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;


export const FormButton = styled(Link)`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const FormBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
