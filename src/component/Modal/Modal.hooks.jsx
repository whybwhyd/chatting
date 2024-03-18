import React from 'react';
import Modal from './Modal';
import { values } from '../../recoil/modalState';

export const useModal = () => {
  const { mount: _mount, unmount: _unmount } = values();

  const mount = (name, element, customStyle) => {
    _mount(
      name,
      <Modal name={name} customStyle={customStyle} position="normal">
        {element}
      </Modal>,
    );
  };
  const centerMount = (name, element, customStyle) => {
    _mount(
      name,
      <Modal name={name} customStyle={customStyle} position="center">
        {element}
      </Modal>,
    );
  };
  const leftMount = (name, element) => {
    _mount(
      name,
      <Modal name={name} position="left">
        {element}
      </Modal>,
    );
  };

  const rightMount = (name, element) => {
    _mount(
      name,
      <Modal name={name} position="right">
        {element}
      </Modal>,
    );
  };

  const unmount = (name) => {
    _unmount(name);
  };

  return { mount, centerMount, leftMount, rightMount, unmount };
};
