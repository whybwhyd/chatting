import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { HiBadgeCheck } from 'react-icons/hi';
import { GoTriangleDown } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { RiHome2Line } from 'react-icons/ri';
import { LuPlus } from 'react-icons/lu';
import { IoSearchOutline } from 'react-icons/io5';

const ChatContents = () => {
  return (
    <div>
      {/* 헤더 */}
      <div>
        <IoIosArrowBack />
        <div>
          <div>
            <p>광화문석갈비</p>
            <HiBadgeCheck />
          </div>
          <div>
            <p>02-539-0107</p>
            <GoTriangleDown />
          </div>
        </div>
        <div>
          <IoSearchOutline />
          <IoIosMenu />
        </div>
      </div>
      {/* contents */}
      <div>
        <div>
          {/* fixed로 고정하기 */}
          <RiHome2Line />
        </div>
        {/* 검색어에 따라 나오는 카드 */}
        <div>
          <img />
          <div>
            {/* card */}
            <p>
              좋은 고기를 태우지 않고 먹을 수 없을까?
              <br /> 고기를 먹을 때 옷에 냄새가 안 밸 수 없을까? <br />
              이렇게 시작된 광석씨네 이야기
            </p>
            <div>
              <button>코엑스점</button>
              <button>D타워점</button>
            </div>
          </div>
          <p>오후 12:12</p>
        </div>
        <div>
          <div>
            {/* 노란 말풍선 */}
            <p>메뉴를 보여주세요</p>
          </div>
          <p>오후 12:12</p>
        </div>
      </div>
      <div>
        {/* 푸터 */}
        <div>
          <div>
            전체
            <GoTriangleDown />
          </div>
          <div>
            <LuPlus />
            <input placeholder="챗봇에게 메세지 보내기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContents;
