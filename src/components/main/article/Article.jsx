import styles from './Article.module.css';

const Article = () => {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>Get <span className={styles.highlight_word}>insights</span> that help your bussiness grow.</h1>
            <p className={styles.paragraph}>Discover the benefits of data analytics and make better decisions regarding revenue, customer exprecience, and overall efficiency.</p>
        </article>
    );
}
 
export default Article;