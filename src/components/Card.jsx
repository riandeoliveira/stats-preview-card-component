import styles from './Card.module.css';
import Header from './header/Header';
import Main from './main/Main';

const Card = () => {
    return (
        <div className={styles.container}>
            <Main />
            <Header />
        </div>
    );
}
 
export default Card;