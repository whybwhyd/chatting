import * as St from './style';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';
import { SlBubble } from 'react-icons/sl';
import { CiMusicNote1 } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { HiChatBubbleOvalLeft } from 'react-icons/hi2';
import { PiDotsThreeOutlineThin } from 'react-icons/pi';
// import { GoTriangleDown } from 'react-icons/go';

const HomePage = () => {
  return (
    <St.HomeFrame>
      {/* 채팅 헤더 */}
      <St.HomeHeaderWrapper>
        <St.HomeHeader>
          <St.HeaderText>Chats</St.HeaderText>
          <St.HeaderIconGroup>
            <IoSearchOutline size={'24px'} />
            <St.BubbleContainer>
              <SlBubble size={'24px'} />
              <St.BubblePlus>+</St.BubblePlus>
            </St.BubbleContainer>
            <CiMusicNote1 size={'24px'} />
            <IoSettingsOutline size={'24px'} />
          </St.HeaderIconGroup>
        </St.HomeHeader>
      </St.HomeHeaderWrapper>

      {/* 채팅 body */}
      <St.BodyFrame>
        <St.kakaoImgDiv>
          <RiKakaoTalkFill size={'38px'} />
        </St.kakaoImgDiv>
        <St.kakaoChatFrame>
          <St.ChatTextTitle>KakaoTalk</St.ChatTextTitle>
          <St.Text>Please check My Kakao Account Info</St.Text>
        </St.kakaoChatFrame>
        <St.AlarmFrame>
          <St.Text>21:22</St.Text>
          <St.TextAlarmdiv>1</St.TextAlarmdiv>
        </St.AlarmFrame>
      </St.BodyFrame>

      {/* 채팅 푸터 */}
      <St.HomeFooterWrapper>
        <St.HomeFooterFrame>
          <BsPerson size={'26px'} />
          <HiChatBubbleOvalLeft size={'26px'} />
          <IoSearchOutline size={'26px'} />
          <PiDotsThreeOutlineThin size={'26px'} />
        </St.HomeFooterFrame>
      </St.HomeFooterWrapper>
    </St.HomeFrame>
  );
};

export default HomePage;
