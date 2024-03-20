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
    keywordMenu: { 점심메뉴: '', 특선메뉴: '', 디너메뉴: '' },
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
    keywordMenu,
  } = form;
  const onchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const nextBtnHandler = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    }
  };
  const beforeBtnHandler = () => {
    if (step === 2) {
      setStep(1);
    } else {
      setStep(0);
    }
  };
  const menuOnChange = (key, value) => {
    setForm((prevState) => ({
      ...prevState,
      keywordMenu: {
        ...prevState.keywordMenu,
        [key]: value,
      },
    }));
  };

  const submitBtnHandler = () => {
    addData(
      storeName,
      storeDescription,
      storeProfileImg,
      storeProductImg,
      storeProductDescription,
      color,
      keywordMenu,
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
          display: step === 0 ? 'grid' : 'none',
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
      </motion.div>
      <motion.div
        animate={{ translateX: `${(1 - step) * 100}vw` }}
        style={{
          translateX: `${(1 - step) * 100}vw`,
          display: step === 1 ? 'grid' : 'none',
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
      </motion.div>
      <motion.div
        animate={{ translateX: `${(2 - step) * 100}vw` }}
        style={{
          translateX: `${(2 - step) * 100}vw`,
          display: step === 2 ? 'grid' : 'none',
          gap: '5px',
        }}
        transition={{
          ease: 'easeInOut',
        }}
      >
        {Object.keys(keywordMenu).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              value={keywordMenu[key]}
              onChange={(e) => menuOnChange(key, e.target.value)}
            />
          </div>
        ))}

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
      <button
        type="button"
        style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
        onClick={beforeBtnHandler}
      >
        이전 페이지
      </button>
      <button
        type="button"
        style={{ visibility: step === 2 ? 'hidden' : 'visible' }}
        onClick={nextBtnHandler}
      >
        다음 페이지
      </button>
      <button
        type="submit"
        style={{ visibility: step === 2 ? 'visible' : 'hidden' }}
        onClick={submitBtnHandler}
      >
        페이지 만들기
      </button>
    </St.Form>
  );
};

export default CreateChat;
