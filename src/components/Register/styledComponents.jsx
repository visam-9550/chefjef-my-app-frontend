import styled from 'styled-components';
export const Registercontainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:rgb(42, 60, 59);
`
export const Container = styled.div`
  width: 60%;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:rgb(167, 165, 165);
  @media screen and (min-width: 767px){
  width: 40%;
}
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
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
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 12px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color:rgb(33, 74, 136);
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Success = styled.p`
  color: green;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const LoginText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`