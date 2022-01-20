import styles from './Header.module.css';
import img from '../../assets/images/image-header-desktop.png';

const Header = () => {
    return (
        <header className={styles.container}>
            <img src={img} alt="Header image" className={styles.image} />
        </header>
    );
}
 
export default Header;