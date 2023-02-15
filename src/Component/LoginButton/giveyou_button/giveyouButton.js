import React from 'react';
import styles from './giveyouButton.module.css';

const moveAuth = () => {
  fetch('http://localhost:7010/auth/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify({
      email: 'test@example.com',
      nick: 'eunbi',
      password: '12345',
    }),
  }).then((result) => {
    console.log('결과 확인 : ', result);
  });
};

const GiveyouButton = ({ onClick }) => (
  <div className={styles.buttonWrapper}>
    {/* <button className={styles.button} onClick={onClick}> */}
    <button className={styles.button} onClick={moveAuth}>
      깁유로고
    </button>
    <p className={styles.loginDescription}>GiveYou 로그인</p>
  </div>
);

export default GiveyouButton;
