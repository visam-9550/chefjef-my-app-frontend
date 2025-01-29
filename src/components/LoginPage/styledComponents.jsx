import styled from "styled-components"
export const Logincontainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:rgb(72, 60, 49);
`
export const Container = styled.div`
  width: 60%;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: rgb(167, 165, 165);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
@media screen and (min-width: 767px){
  width: 40%;
}
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
  font-size: 14px;
  color: #555;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  @media screen and (min-width: 767px){
    width: 90%;
  }
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 12px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const RegisterText = styled.p`
    color: black;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;