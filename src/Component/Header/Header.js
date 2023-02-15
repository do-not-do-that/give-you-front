import React, { useState } from 'react';
import styles from './Header.module.scss';
import LoginModal from '../Modal/LoginModal/LoginModal';
import BaseModal from '../Modal/BaseModal/BaseModal';
const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRegister = () => {
    // 추후 user 판별이 가능하면
    // if (user.id === undefined) {
    //   openModal();
    //   return;
    // }

    openModal();
    return;
  };

  return (
    <nav className={styles.navbar}>
      <a href="/">깁유로고</a>
      <div className={styles.loginElementWrapper}>
        <button className={styles.postRegister} onClick={handleRegister}>
          새 글 쓰기
        </button>

        <button className={styles.login} onClick={openModal}>
          로그인
        </button>
      </div>
      {modalVisible && (
        <BaseModal visible={modalVisible} name="login" onClose={closeModal}>
          <LoginModal handleClose={closeModal} tabIndex={0}></LoginModal>
        </BaseModal>
      )}
    </nav>
  );
};

export default Header;
