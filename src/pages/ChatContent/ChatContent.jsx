import * as St from './style';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { HiBadgeCheck } from 'react-icons/hi';
import { GoTriangleDown } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { RiHome2Line } from 'react-icons/ri';
import { LuPlus } from 'react-icons/lu';
import { IoSearchOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DefaultChat from './DefaultChat';

const ChatContent = () => {
  const [chatTotal, SetChatTotal] = useState([]);
  const [chat, SetChat] = useState('');
  const [showIntro, SetShowIntro] = useState(false);
  const { state } = useLocation();
  const { doc } = state;
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    SetChat(e.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (chat.length > 0) {
        SetChatTotal([
          ...chatTotal,
          { type: 'yellow', chat: chat, createdDt: new Date().toTimeString() },
        ]);
      } else {
        alert('내용을 입력해주세요');
      }

      const keys = Object.keys(doc.keywordMenu);
      keys.forEach((key) => {
        if (key === chat) {
          SetChatTotal([
            ...chatTotal,
            {
              type: 'yellow',
              chat: chat,
              createdDt: new Date().toTimeString(),
            },
            {
              type: 'white',
              chat: doc.keywordMenu[chat],
              createdDt: new Date().toTimeString(),
            },
          ]);
        }
      });
      SetChat('');
    }
  };

  const showIntroDelay = () => {
    setTimeout(() => {
      SetShowIntro(true);
    }, 1500);
  };

  useEffect(() => {
    showIntroDelay();
  }, []);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatTotal]);
  const beforePageHandler = () => {
    navigate('/');
  };
  return (
    <St.ChatTotalFrame>
      <St.ChatFrame>
        {/* 헤더 */}
        <St.ChatHeaderWrapper>
          <St.ChatHeader>
            <div onClick={beforePageHandler}>
              <IoIosArrowBack />
            </div>

            <St.ChatHeaderStore>
              <St.ItemsFlexDiv>
                <div>{doc.storeName}</div>
                <HiBadgeCheck />
              </St.ItemsFlexDiv>
              <St.ItemsFlexDiv>
                <div>02-539-0107</div>
                <GoTriangleDown />
              </St.ItemsFlexDiv>
            </St.ChatHeaderStore>

            <St.ItemsFlexDiv>
              <IoSearchOutline />
              <IoIosMenu />
            </St.ItemsFlexDiv>
          </St.ChatHeader>
        </St.ChatHeaderWrapper>

        {/* contents */}
        <div style={{ overflowY: 'auto', height: '560px' }}>
          <St.BodyFrame ref={chatContainerRef}>
            <St.HomeIconDiv>
              <RiHome2Line />
            </St.HomeIconDiv>
            {/* 검색어에 따라 나오는 카드 */}
            <div>
              {showIntro && (
                <>
                  <DefaultChat doc={doc} />
                </>
              )}
            </div>
            {chatTotal.map((item, index) => (
              <div key={index}>
                {item.type === 'yellow' ? (
                  <St.TalkBubbleFrameY>
                    <div>{item.createdDt.slice(0, 5)}</div>
                    <St.MyChat>{item.chat}</St.MyChat>
                  </St.TalkBubbleFrameY>
                ) : (
                  <St.TalkBubbleFrameW>
                    <St.ImgDiv>
                      <St.Img alt="사진" src={doc.storeProfileImg} />
                    </St.ImgDiv>
                    <St.TalkBubbleContentFrame>
                      <div>{doc.storeName}</div>
                      <St.ChatTimeFrame>
                        <St.StoreChat>
                          <div>{item.chat}</div>
                        </St.StoreChat>
                        <div>{item.createdDt.slice(0, 5)}</div>
                      </St.ChatTimeFrame>
                    </St.TalkBubbleContentFrame>
                  </St.TalkBubbleFrameW>
                )}
              </div>
            ))}
          </St.BodyFrame>
        </div>

        {/* 푸터 */}
        <St.ChatFooterWrapper>
          <St.ChatFooterFrame>
            <St.SelectDiv>
              전체
              <GoTriangleDown />
            </St.SelectDiv>
            <St.ChatInputDiv>
              <LuPlus size="28px" color="#7d8088" />
              <St.ChatInput
                id="chat"
                value={chat}
                onChange={onChange}
                placeholder="챗봇에게 메세지 보내기"
                onKeyPress={handleInputKeyPress}
              />
            </St.ChatInputDiv>
          </St.ChatFooterFrame>
        </St.ChatFooterWrapper>
      </St.ChatFrame>
    </St.ChatTotalFrame>
  );
};

export default ChatContent;
