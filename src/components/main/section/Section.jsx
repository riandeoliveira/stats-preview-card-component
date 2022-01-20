import styles from './Section.module.css';
import DataInfo from './data-info/DataInfo';

const Section = props => {
    return (
        <section className={styles.container}>
            <DataInfo data="10k+" info="Companies" />
            <DataInfo data="314" info="Templates" />
            <DataInfo data="12M+" info="Queries" />
        </section>
    );
}

export default Section;