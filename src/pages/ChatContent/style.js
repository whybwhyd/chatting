import { styled } from 'styled-components';

export const ChatTotalFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
`;
export const ChatFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 375px;
  background-color: #262628;
  color: white;
`;
export const ChatHeaderWrapper = styled.div`
  padding-top: 20px;
  width: 340px;
  height: 60px;
`;
export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ChatHeaderStore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
`;
export const ItemsFlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const HomeIconDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #38383a;
  width: 35px;
  height: 35px;
`;
export const BodyFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
`;
export const ChatFooterWrapper = styled.div`
  width: 375px;
`;
export const ChatFooterFrame = styled.div`
  background-color: #2c2c2e;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const SelectDiv = styled.div`
  border: 2px solid #404042;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 37px;
`;
export const ChatInputDiv = styled.div`
  border: 2px solid #404042;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 8px;
`;
export const ChatInput = styled.input`
  border-radius: 30px;
  background-color: #38383a;
  width: 295px;
  height: 28px;
  color: white;
`;
export const StoreChat = styled.div`
  display: inline-block;
  max-width: 230px;
  border-radius: 10px;
  background-color: white;
  padding: 5px;
  color: black;
`;
export const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 19px;
`;
export const ImgDiv = styled.div`
  border-radius: 19px;
`;
export const TalkBubbleFrameW = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;
export const ChatTimeFrame = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
export const TalkBubbleFrameY = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
  margin-top: 20px;
`;
export const TalkBubbleContentFrame = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MyChat = styled.div`
  border-radius: 10px;
  background-color: yellow;
  padding: 5px;
  color: black;
`;
export const chatText = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 10pt;
`;
export const chatTextbtnFrame = styled.div`
  width: 200px;
  display: flex;
  gap: 10px;
`;
export const Btn = styled.button`
  width: 200px;
  display: flex;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
`;
