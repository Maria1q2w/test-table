import styles from "./styles";
import SubCell from "./SubCell";

const AdminCell = ({ plan, fact, isHighlighted }: {plan: any; fact: any; isHighlighted: boolean; }) => (
    <td className={`${styles.td} ${isHighlighted ? styles.text.hightlighted : styles.text.dimmed} `}>
        <div className={`${styles.size} ${styles.flexCol}`}>
            <div className={styles.tdRow}>
                <SubCell value={`$ ${plan?.income ?? "-"}`} />
                <SubCell value={`$ ${fact?.income ?? "-"}`} />
            </div>
            <div className={styles.tdRow}>
                <SubCell value={plan?.activePartners ?? "-"} />
                <SubCell value={fact?.activePartners ?? "-"} />
            </div>
        </div>
    </td>
)

export default AdminCell;