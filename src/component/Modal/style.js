import { styled } from 'styled-components';

export const ModalOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 99;
`;
export const CenterModalOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000082;
  z-index: 99;
`;

export const LeftModalOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  height: 100%;
  background-color: #00000000;
  z-index: 99;
`;

export const RightModalOuter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
  height: 100%;
  background-color: #00000000;
  z-index: 99;
`;

export const ModalInner = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 8px;
  margin: 0 auto;
  transition: all 2s ease-in;
  background-color: white;
  border-radius: 10px;
`;
export const CenterModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  padding: 20px;
  transform: translate(-50%, -70%);
  transition: all 2s ease-in;
  background-color: white;
`;

export const LeftModalInner = styled.div`
  position: absolute;
  width: fit-content;
  height: calc(100vh - 65px);
  padding-top: 90px;
  padding-left: 50px;
  background: transparent;

  @media (max-width: 1060px) {
    width: 100vw;
    height: fit-content;
    max-height: 500px;
    padding-top: 0;
    padding-left: 0;
  }
`;

export const RightModalInner = styled.div`
  position: absolute;
  overflow-y: auto;
  right: 0;
  height: 100vh;
  padding: 90px 55px 0 0;
  background: transparent;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1060px) {
    bottom: 0;
    height: fit-content;
    width: 100vw;
    padding: 0px;
  }
`;
