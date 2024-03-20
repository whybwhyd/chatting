import {
  doc,
  setDoc,
  collection,
  getDocs,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { v4 as uuid } from 'uuid';

//데이터 가져오기 = > 배열 형식으로 가져와지지 않기 때문에 배열 형식으로 변환

export const chatDataList = await getDocs(collection(db, 'chatList'));

export const getPosts = async () => {
  try {
    const postsCollection = collection(db, 'chatList');
    const postsSnapshot = await getDocs(postsCollection);
    const posts = postsSnapshot.docs.map((doc) => doc.data());
    return posts;
  } catch (error) {
    console.error('게시물을 불러오는 중 오류 발생:', error);
    throw error;
  }
};

// 데이터 추가하기 - 톡방 만들기(플친 추가 대신)
export const addData = async (
  storeName,
  storeDescription,
  storeProfileImg,
  storeProductImg,
  storeProductDescription,
  color,
  keywordMenu,
) => {
  const contentId = uuid();
  const addDocRef = doc(db, 'chatList', contentId);
  const data = {
    id: contentId,
    storeName,
    storeDescription,
    storeProfileImg,
    storeProductImg,
    storeProductDescription,
    color,
    keywordMenu,
    createdDt: new Date().toString(),
  };
  await setDoc(addDocRef, data);
};
