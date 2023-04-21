import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';

const Header = (props) => {
  const { children } = props;
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle} className={styles.header}>
      {children}
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
