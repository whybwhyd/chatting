import React from 'react';
import * as St from './style';
import { values } from '../../recoil/modalState';

const Modal = ({ children, name, position, customStyle }) => {
  const { unmount } = values();

  const handleClose = (event) => {
    const { target, currentTarget } = event;

    if (target !== currentTarget) return;

    unmount(name);
  };

  let content;
  switch (position) {
    case 'normal':
      content = (
        <St.ModalOuter onClick={handleClose}>
          <St.ModalInner style={customStyle}>{children}</St.ModalInner>
        </St.ModalOuter>
      );
      break;
    case 'center':
      content = (
        <St.CenterModalOuter onClick={handleClose}>
          <St.CenterModalInner style={customStyle}>
            {children}
          </St.CenterModalInner>
        </St.CenterModalOuter>
      );
      break;
    case 'left':
      content = (
        <St.LeftModalOuter>
          <St.LeftModalInner>{children}</St.LeftModalInner>
        </St.LeftModalOuter>
      );
      break;
    case 'right':
      content = (
        <St.RightModalOuter>
          <St.RightModalInner>{children}</St.RightModalInner>
        </St.RightModalOuter>
      );
      break;
    default:
      content = (
        <St.ModalOuter onClick={handleClose}>
          <St.ModalInner>{children}</St.ModalInner>
        </St.ModalOuter>
      );
  }

  return <>{content}</>;
};

export default Modal;
