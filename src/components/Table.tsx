import { useEffect, useState } from "react"
import type { Admin, ApiResponse, Total } from "./types";
import { getMonthIndices, MONTH_NAMES } from "../utils/dateUtils";
import ArrowButtons from "./table/ArrowButtons";
import MonthHeader from "./table/MonthHeader";
import TotalRow from "./table/TotalRow";
import AdminRow from "./table/AdminRow";
import styles from "./table/styles";

export const Table = () => {
    const [offset, setOffset] = useState(0);
    const [admins, setAdmins] = useState<Admin[]>([]);
    const [total, setTotal] = useState<Total[]>([])

    useEffect(() => {
        fetch("https://3snet.co/js_test/api.json")
        .then((res) => res.json())
        .then((json: ApiResponse) => {
            setAdmins(json.data.table);
            setTotal(json.data.total);
        })
    }, []);

    const monthIndices = getMonthIndices(offset);

    const visibleTotals = monthIndices.map((m) => {
        return total[m];
    })

    const handlePrev = () => setOffset((prev) => prev - 1);
    const handleNext = () => setOffset((prev) => prev + 1);

    const now = new Date();
    const currentMonth = now.getMonth();
    const hightlightedMonths = Array.from(
        {length: 12 - ((currentMonth - 1 + 12) % 12) },
        (_, i) => ((currentMonth - 1 + i + 12) % 12)
    )

    return (
        <div className="p-6 inline-block">
            <ArrowButtons onPrev={handlePrev} onNext={handleNext} />
            <table className={`${styles.border} border-collapse text-sm table-fixed`}>
                <thead>
                    <MonthHeader monthIndices={monthIndices} hightlightedMonths={hightlightedMonths} />
                </thead>

                <tbody>
                    <TotalRow total={total} monthIndices={monthIndices} visibleTotals={visibleTotals} hightlightedMonths={hightlightedMonths} />
                    {admins.map((admin) => (
                        <AdminRow key={admin.id} admin={admin} monthIndices={monthIndices} hightlightedMonths={hightlightedMonths} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}