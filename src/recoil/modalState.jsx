import React, { Fragment } from 'react';
import { atom, useRecoilState, useRecoilCallback } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: new Map(),
});

export const values = () => {
  const [overlays] = useRecoilState(modalState);

  const mount = useRecoilCallback(
    ({ set }) =>
      (id, element) => {
        set(modalState, (_overlays) => {
          const overlays = new Map(_overlays);
          overlays.set(id, element);
          return overlays;
        });
      },
    [],
  );

  const unmount = useRecoilCallback(
    ({ set }) =>
      (id) => {
        set(modalState, (_overlays) => {
          const overlays = new Map(_overlays);
          overlays.delete(id);
          return overlays;
        });
      },
    [],
  );
  return { overlays, mount, unmount };
};

export const OverlayProvider = ({ children }) => {
  const { overlays } = values();

  return (
    <>
      {children}
      {[...overlays.entries()].map(([id, element]) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
    </>
  );
};
