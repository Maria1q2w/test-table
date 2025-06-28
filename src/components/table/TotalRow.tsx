import type { Total } from "../types";
import styles from "./styles";
import TotalCell from "./TotalCell";

const TotalRow = ({ total, monthIndices, visibleTotals, hightlightedMonths }: { total: Total[]; monthIndices: number[], visibleTotals: Total[]; hightlightedMonths: number[] }) => (
    <tr className="font-semibold h-[80px]">
        <td className={`${styles.titleTd} px-2 w-[200px]`}>Manager</td>
    <td className={`${styles.titleTd} ${styles.size}`}>
            <div className={`${styles.flexCol} h-full ${styles.rowDivider}`}>
                <div className={`${styles.labelRow} `}>
                    Total Income
                </div>
                <div className={`${styles.labelRow} `}>
                    Total Active Partners
                </div>
            </div>
        </td>
            {visibleTotals.map((_, i) => (
                    <TotalCell key={i} plan={total[monthIndices[i]]?.plan} fact={total[monthIndices[i]]?.fact} isHighlighted={hightlightedMonths.includes(monthIndices[i])} />
                )
            )}
            <td className={`${styles.border} ${styles.lastCol}`}></td>
    </tr>
)

export default TotalRow;