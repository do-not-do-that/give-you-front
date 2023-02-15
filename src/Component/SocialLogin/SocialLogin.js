import styles from './SocialLogin.module.css';
import GoogleButton from '../LoginButton/google_button/googleButton';
import KakaoButton from '../LoginButton/kakao_button/kakaoButton';

const SocialLogin = ({ googleOnSuccess }) => {
  return (
    <>
      <h1 className={styles.loginTitle}>Give-you, 기부를 합니다.</h1>
      <section className={styles.loginWrapper}>
        <GoogleButton
          onClick={() => {
            fetch('http://localhost:7010/auth/google', {
              mode: 'cors',
            })
              .then((response) => {
                response.json();
              })
              .then((result) => {
                console.log('결과 확인 : ', result);
              });
          }}
        ></GoogleButton>
        <KakaoButton></KakaoButton>
        <GoogleButton></GoogleButton>
      </section>
    </>
  );
};

export default SocialLogin;
