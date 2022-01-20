import styles from './Main.module.css';
import Article from './article/Article';
import Section from './section/Section';

const Main = () => {
    return (
        <main className={styles.container}>
            <Article />
            <Section />
        </main>
    );
}
 
export default Main;