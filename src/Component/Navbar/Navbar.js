import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.css';
import LoginModal from '../Modal/LoginModal/LoginModal';
import BaseModal from '../Modal/BaseModal/BaseModal';
import { setModalVisible } from '../../Store/LoginStep';

const Navbar = () => {
  //   const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const modalVisible = useSelector((state) => state.loginStep.modalVisible);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    console.log('modal open!');
    dispatch(setModalVisible(true));
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    dispatch(setModalVisible(false));
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

  useEffect(() => {
    if (user) {
      // page refresh후 갱신
      console.log('유저가 있어요!');
    }
  }, [dispatch, user]);

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
      <BaseModal visible={modalVisible} name="login" onClose={closeModal}>
        <LoginModal handleClose={closeModal} tabIndex={0}></LoginModal>
      </BaseModal>
    </nav>
  );
};

export default Navbar;
