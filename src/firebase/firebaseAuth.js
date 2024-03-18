import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const firebaseAuth = () => {
  const navigate = useNavigate();
  // 로그인
  const loginEmailPassword = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          toast.success('로그인 성공! 채팅목록으로 이동합니다!');
          setTimeout(() => {
            navigate('/');
          }, '2000');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return { loginEmailPassword };
};
