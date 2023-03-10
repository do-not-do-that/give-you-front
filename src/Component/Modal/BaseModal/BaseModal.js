import Portal from '../Portal/Portal';
import styled from 'styled-components';
import { useEffect } from 'react';

const BaseModal = ({ name, onClose, visible, children }) => {
  const onMaskClick = (e) => {
    if (onClose === undefined) return;
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <>
      <ModalOverlay name={name} visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex={-1} visible={visible}>
        {children}
      </ModalWrapper>
    </>
  );

  // TODO : Portal 삭제 시 동작함. 왜?
  return (
    <Portal elementId="modal-root">
      <ModalOverlay name={name} visible={visible} />
      <ModalWrapper onClick={onMaskClick} tabIndex={-1} visible={visible}>
        {children}
      </ModalWrapper>
    </Portal>
  );
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  top:0;
}
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${(props) =>
    props.name === 'loading' ? 'white' : 'rgba(77, 77, 77, 0.5)'};
  z-index: 999;
`;
export default BaseModal;
