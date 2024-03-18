import * as St from './style';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { addData } from '../../firebase/Database';
import { toast, ToastContainer } from 'react-toastify';
import { useModal } from '../../component/Modal/Modal.hooks';
import 'react-toastify/dist/ReactToastify.css';

const CreateChat = () => {
  const { unmount } = useModal();
  const initialValue = {
    storeName: '',
    storeContent: '',
    storeDescription: '',
    storeProfileImg: '',
    storeProductImg: '',
    storeProductDescription: '',
    color: '',
  };
  const [form, setForm] = useState(initialValue);
  const [step, setStep] = useState(0);
  const {
    storeName,
    storeDescription,
    storeProfileImg,
    storeProductImg,
    storeProductDescription,
    color,
  } = form;
  const onchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const nextBtnHandler = () => {
    setStep(1);
  };
  const beforeBtnHandler = () => {
    setStep(0);
  };
  const submitBtnHandler = () => {
    addData(
      storeName,
      storeDescription,
      storeProfileImg,
      storeProductImg,
      storeProductDescription,
      color,
    );
    setForm(initialValue);

    toast.success('카톡방 생성 성공!');

    setTimeout(() => {
      unmount('createChat');
    }, '2000');
  };
  return (
    <St.Form>
      <motion.div
        animate={{ translateX: `${step * -100}vw` }}
        transition={{ ease: 'easeInOut' }}
        style={{
          display: step <= 0 ? 'grid' : 'none',
          gap: '5px',
          fontWeight: 'bold',
        }}
      >
        <div>카톡방 만들기</div>
        <input
          id="storeName"
          name="storeName"
          placeholder="이름을 입력해주세요"
          value={storeName}
          onChange={onchange}
        />
        <input
          id="color"
          name="color"
          placeholder="배경색을 정해주세요(영어로)"
          value={color}
          onChange={onchange}
        />
        <input
          id="storeDescription"
          name="storeDescription"
          placeholder="가게 소개를 입력해주세요"
          value={storeDescription}
          onChange={onchange}
        />
        <button type="button" onClick={nextBtnHandler}>
          다음 페이지
        </button>
      </motion.div>
      <motion.div
        animate={{ translateX: `${(1 - step) * 100}vw` }}
        style={{
          translateX: `${(1 - step) * 100}vw`,
          display: step > 0 ? 'grid' : 'none',
          gap: '5px',
        }}
        transition={{
          ease: 'easeInOut',
        }}
      >
        <input
          id="storeProfileImg"
          name="storeProfileImg"
          placeholder="이미지 링크를 입력해주세요"
          value={storeProfileImg}
          onChange={onchange}
        />
        <input
          id="storeProductImg"
          name="storeProductImg"
          placeholder="상품 이미지 링크를 입력해주세요"
          value={storeProductImg}
          onChange={onchange}
        />
        <input
          id="storeProductDescription"
          name="storeProductDescription"
          placeholder="상품 소개를 입력해주세요"
          value={storeProductDescription}
          onChange={onchange}
        />
        <button type="button" onClick={beforeBtnHandler}>
          이전 페이지
        </button>
        <button type="submit" onClick={submitBtnHandler}>
          페이지 만들기
        </button>
        <ToastContainer
          position="top-center"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </motion.div>
    </St.Form>
  );
};

export default CreateChat;
