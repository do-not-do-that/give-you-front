import styles from './SocialLogin.module.css';
import GoogleButton from '../LoginButton/google_button/googleButton';
import KakaoButton from '../LoginButton/kakao_button/kakaoButton';
import GiveyouButton from '../LoginButton/giveyou_button/giveyouButton';

const SocialLogin = ({ googleOnSuccess }) => {
  return (
    <>
      <h1 className={styles.loginTitle}>Give-you, 기부를 합니다.</h1>
      <section className={styles.loginWrapper}>
        <GoogleButton
          onClick={() => {
            fetch('http://localhost:7010/auth/google')
              .then((response) => {
                response.json();
              })
              .then((result) => {
                console.log('결과 확인 : ', result);
              });
          }}
        ></GoogleButton>
        <KakaoButton></KakaoButton>
        {/* <GiveyouButton
          onClick={() => {
            fetch('http://localhost:7010/auth/join', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: 'test@example.com',
                nick: 'eunbi',
                password: '12345',
              }),
            }).then((result) => {
              console.log('결과 확인 : ', result);
            });
          }}
        ></GiveyouButton> */}
        <GiveyouButton></GiveyouButton>
      </section>
    </>
  );
};

export default SocialLogin;
