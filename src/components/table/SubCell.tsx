import styles from "./styles";

const SubCell = ({ value }: { value: string | number }) => (
    <div className={`${styles.cell}`}>
        {value}
    </div>
)

export default SubCell;