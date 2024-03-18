import { styled } from 'styled-components';

export const LoginFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;
export const LoginFormFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 335px;
  height: 500px;
  gap: 17px;
  padding-bottom: 100px;
`;
export const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;
export const Text = styled.p`
  margin: 0;
  text-align: center;
  color: #7c7c7c;
`;
export const TextTitle = styled.p`
  margin: 0;
  text-align: center;
  margin-bottom: 6px;
  font-size: 19pt;
  font-weight: 600;
`;
export const TextDescription = styled.p`
  margin: 0;
  text-align: center;
  font-size: 12pt;
`;
export const LoginInputFrame = styled.div`
  display: grid;
`;

export const LoginInput = styled.input`
  border: none;
  border-bottom: 2px solid #9c9c9c;
  height: 42px;
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  backgound-color: #f9f9f9;
  height: 40px;
`;
export const LoginButtonFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
