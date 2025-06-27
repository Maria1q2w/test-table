const ArrowButtons = ({ onPrev, onNext }: {onPrev: () => void; onNext: () => void}) => (
            <div className="flex justify-end items-center mb-4 gap-[25px]">
                {[
                    { label: "←", onClick: onPrev },
                    { label: "→", onClick: onNext }
                ].map(({label, onClick}) => (
                    <button key={label} onClick={onClick} className="w-10 h-10 text-2xl border border-gray-400 rounded-md hover:bg-gray-100 transition pb-[5px]">{label}</button>
                ))}
            </div>
)
export default ArrowButtons;