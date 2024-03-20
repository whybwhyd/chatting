import React from 'react';
import * as St from './style';
import { Link } from 'react-router-dom';

const DefaultChat = ({ doc }) => {
  return (
    <div>
      <St.TalkBubbleFrameW>
        <St.ImgDiv>
          <St.Img alt="사진" src={doc.storeProfileImg} />
        </St.ImgDiv>
        <St.TalkBubbleContentFrame>
          <div>{doc.storeName}</div>
          <St.StoreChat>
            <div>
              &apos;{doc.storeName}&apos;채널을 추가해 주셔서 감사합니다.
              <br />
              앞으로 다양한 소식과 혜택/정보를 메세지로 받으실 수 있습니다.
              <br />
            </div>
            <div>
              채널 추가 일시 (한국시간 기준):{doc.createdDt}
              <br />
              수신거부:홈&gt;채널차단
            </div>
          </St.StoreChat>
        </St.TalkBubbleContentFrame>
      </St.TalkBubbleFrameW>
      {doc.storeName === '광화문석갈비' && (
        <St.TalkBubbleFrameW>
          <St.ImgDiv>
            <St.Img alt="사진" src={doc.storeProfileImg} />
          </St.ImgDiv>
          <St.TalkBubbleContentFrame>
            <div>{doc.storeName}</div>
            <St.StoreChat>
              <div>
                <img alt="제품사진" src={doc.storeProductImg} />
                <div>
                  <St.chatText>
                    <div>
                      좋은 고기를 <br />
                      태우지 않고 먹을 수 없을까?
                    </div>
                    고기를 먹을 때 <br />
                    <div>
                      옷에 냄새가 안 밸 수 없을까? <br />
                    </div>
                    <div>이렇게 시작된 광석씨네 이야기</div>
                  </St.chatText>
                  <Link>매거진 다운로드 링크</Link>
                  <St.chatTextbtnFrame>
                    <St.Btn>
                      <a
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                        }}
                        href="https://m.search.naver.com/search.naver?sm=mtp_sug.top&where=m&query=%EC%BD%94%EC%97%91%EC%8A%A4+%EA%B4%91%ED%99%94%EB%AC%B8%EC%84%9D%EA%B0%88%EB%B9%84&acq=%EA%B4%91%ED%99%94%EB%AC%B8%EC%84%9D+%EA%B0%88%EB%B9%84&acr=2&qdt=0"
                      >
                        코엑스점
                      </a>
                    </St.Btn>
                    <St.Btn>
                      <a
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                        }}
                        href="https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&ssc=tab.m.all&oquery=%EC%BD%94%EC%97%91%EC%8A%A4+%EA%B4%91%ED%99%94%EB%AC%B8%EC%84%9D%EA%B0%88%EB%B9%84&tqi=iQVLslp0iIdss78J1WKsssssstw-301554&query=%EA%B4%91%ED%99%94%EB%AC%B8%EC%84%9D%EA%B0%88%EB%B9%84+d%ED%83%80%EC%9B%8C%EC%A0%90"
                      >
                        D타워점
                      </a>
                    </St.Btn>
                  </St.chatTextbtnFrame>
                </div>
              </div>
            </St.StoreChat>
          </St.TalkBubbleContentFrame>
        </St.TalkBubbleFrameW>
      )}
    </div>
  );
};

export default DefaultChat;
