import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>깁유 로고</div>
        <nav className={styles.navigation}>
          <ul>
            <li>새 글쓰기</li>
            <li>로그인</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
