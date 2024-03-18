import { styled } from 'styled-components';

export const HomeFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  // align-items: center;
  height: 100vh;
`;

export const HomeChatFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  /flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 375px;
`;
export const HomeHeaderWrapper = styled.div`
  padding-top: 20px;
  width: 340px;
  height: 60px;
`;
export const HeaderText = styled.div`
  font-size: 18pt;
  font-weight: semi-bold;
`;
export const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderIconGroup = styled.div`
  display: flex;
  gap: 20px;
`;
export const BubblePlus = styled.div`
  position: absolute;
  transform: translate(16px, -28px);
  width: 13px;
  height: 13px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 15pt;
`;
export const BubbleContainer = styled.div`
  position: relative;
`;
export const kakaoImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  background-color: yellow;
  width: 45px;
  height: 45px;
`;
export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
`;
export const kakaoChatFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 46px;
  gap: 5px;
`;
export const TextAlarmdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #ff5400;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  color: white;
  font-size: 11px;
`;
export const AlarmFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;
export const Text = styled.p`
  margin: 0;
  font-size: 10pt;
  color: #a4a4a4;
`;
export const ChatTextTitle = styled.p`
  margin: 0;
`;
export const BodyFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 560px;
`;
export const BodyItemFrame = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  gap: 15px;
  padding: 3px;
`;
export const HomeFooterFrame = styled.div`
  background-color: #f9f9fa;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
export const HomeFooterWrapper = styled.div`
  width: 375px;
  height: 45px;
  padding-bottom: 20px;
`;
export const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 19px;
`;
