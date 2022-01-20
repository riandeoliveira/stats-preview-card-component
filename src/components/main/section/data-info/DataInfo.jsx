import styles from './DataInfo.module.css';

const DataInfo = props => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{props.data}</h2>
            <h3 className={styles.subtitle}>{props.info}</h3>
        </div>
    );
}
 
export default DataInfo;