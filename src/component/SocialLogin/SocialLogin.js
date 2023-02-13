import styles from './SocialLogin.module.css';
import GoogleButton from '../LoginButton/google_button/googleButton';

const SocialLogin = ({}) => {
  return (
    <>
      <h1 className={styles.loginTitle}>Give-you, 기부를 합니다.</h1>
      <section className={styles.loginWrapper}>
        <GoogleButton></GoogleButton>
        <GoogleButton></GoogleButton>
        <GoogleButton></GoogleButton>
      </section>
    </>
  );
};

export default SocialLogin;
