export function DetailItem({label, value}) {
    return (
        <div className="relative w-full mb-[2.5rem]">
            <small className="absolute top-0 left-0 text-xs md:text-sm text-primary-dark/60 dark:text-white/40 font-bold tracking-wider uppercase ">
                {label}
            </small>
            <div className="relative top-5 text-lg md:text-xl font-bold dark:font-normal">
                {value}
            </div>
        </div>
    )
}