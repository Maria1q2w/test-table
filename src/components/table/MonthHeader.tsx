import { MONTH_NAMES } from "../../utils/dateUtils";
import styles from "./styles";

const MonthHeader = ({ monthIndices, hightlightedMonths }: {monthIndices: number[]; hightlightedMonths: number[] }) => (
                    <tr className={`${styles.background} border p-2`}>
                        
                        <th className={`${styles.border} min-w-[200px]`}></th>
                        <th className={`${styles.border} min-w-[160px]`}></th>
                        
                        {monthIndices.map((m, i) => {
                            const isHighlighted = hightlightedMonths.includes(m);
                            return (
                                <th key={m} className={`${styles.border} h-[60px] relative p-2 text-start align-top font-semibold ${isHighlighted ? styles.text.hightlighted : styles.text.dimmed }`}>
                                <div className="absolute top-2 left-2 text-sm">
                                    {MONTH_NAMES[m]}
                                </div>
                                
                                <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs text-gray-500">
                                    <div className={`${styles.textPlanFact}`}>Plan:</div>
                                    <div className={`${styles.textPlanFact} pl-1`}>Fact:</div>
                                </div>
                            </th>
                            )
                        })}
                        <th className={`${styles.border} ${styles.lastCol}`}></th>
                    </tr>
)

export default MonthHeader;