import AdminCell from "./AdminCell";
import styles from "./styles";

const AdminRow = ({ admin, monthIndices, hightlightedMonths }: {admin: any; monthIndices: number[]; hightlightedMonths: number[] }) => (
    <tr>
        <td className={`${styles.border}  w-[160px] px-4 text-left font-medium`}>
            {admin.adminName}
        </td>
        <td className={`${styles.titleTd} w-[160px]`}>
            <div className={`${styles.flexCol} ${styles.size} ${styles.rowDivider}`}>
                <div className={styles.labelRow}>Income</div>
                <div className={styles.labelRow}>Active Partners</div>
            </div>
        </td>
        {monthIndices.map((monthItem) => {
            const monthData = admin.months[monthItem];
            const isHighlighted = hightlightedMonths.includes(monthItem);
            if (!monthData) {
                return <td key={monthItem} className={`${styles.border} p-2 text-start ${isHighlighted ? styles.text.hightlighted : styles.text.dimmed}`}>No date</td>
            }
            return (
                <AdminCell key={monthItem} plan={monthData.plan} fact={monthData.fact} isHighlighted={isHighlighted} />
                
            )
        })}
        <td className={`${styles.border} ${styles.lastCol} ${styles.text.dimmed} text-center`} >...</td>
    </tr>
)

export default AdminRow;