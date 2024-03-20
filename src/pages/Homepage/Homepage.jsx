import * as St from './style';
import React from 'react';
import { useModal } from '../../component/Modal/Modal.hooks';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';
import { SlBubble } from 'react-icons/sl';
import { CiMusicNote1 } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { HiChatBubbleOvalLeft } from 'react-icons/hi2';
import { PiDotsThreeOutlineThin } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPosts } from '../../firebase/Database';
import CreateChat from '../../component/CreateChat/CreateChat';

const HomePage = () => {
  const navigate = useNavigate();
  const { data } = useQuery('chatList', getPosts);
  const { centerMount } = useModal();

  const plusChatHandler = () => {
    centerMount('createChat', <CreateChat />);
  };
  return (
    <St.HomeFrame>
      <St.HomeChatFrame>
        {/* 채팅 헤더 */}
        <St.HomeHeaderWrapper>
          <St.HomeHeader>
            <St.HeaderText>Chats</St.HeaderText>
            <St.HeaderIconGroup>
              <IoSearchOutline size={'24px'} />
              <St.BubbleContainer onClick={plusChatHandler}>
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
          {/* 기본 카카오톡 대화창 */}
          <St.BodyItemFrame>
            <St.kakaoImgDiv>
              <RiKakaoTalkFill size={'38px'} />
            </St.kakaoImgDiv>
            <St.kakaoChatFrame onClick={() => navigate('/defaultChat')}>
              <St.ChatTextTitle>KakaoTalk</St.ChatTextTitle>
              <St.Text>Please check My Kakao Account Info</St.Text>
            </St.kakaoChatFrame>
            <St.AlarmFrame>
              <St.Text>21:22</St.Text>
              <St.TextAlarmdiv>1</St.TextAlarmdiv>
            </St.AlarmFrame>
          </St.BodyItemFrame>
          {/* 리스트 목록 */}
          {data?.map((doc) => {
            return (
              <St.BodyItemFrame key={doc.id}>
                <St.ImgDiv
                  style={{
                    backgroundColor: doc.color ? doc.color : 'skyblue',
                  }}
                >
                  <St.Img alt="기본 이미지" src={doc.storeProductImg} />
                </St.ImgDiv>
                <Link
                  to={`/${doc.id}`}
                  state={{ doc }}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <St.kakaoChatFrame>
                    <St.ChatTextTitle>{doc.storeName}</St.ChatTextTitle>
                    <St.Text>{doc.storeProductDescription}</St.Text>
                  </St.kakaoChatFrame>
                </Link>
                <St.AlarmFrame>
                  <St.Text>21:22</St.Text>
                  <St.TextAlarmdiv>1</St.TextAlarmdiv>
                </St.AlarmFrame>
              </St.BodyItemFrame>
            );
          })}
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
      </St.HomeChatFrame>
    </St.HomeFrame>
  );
};

export default HomePage;
