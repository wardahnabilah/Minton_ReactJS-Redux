export function SelectForm({name, options, label, value, onChange, disabled}) {
    return (
        <div className="relative">
            <select disabled={disabled} onChange={onChange} name={name} value={value} className="w-full rounded-2xl px-7 py-2 hover:cursor-pointer disabled:cursor-auto text-primary-dark  bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow appearance-none">
                <option value="" disabled>{label}</option>
                { options.map((option, index) => {
                    return <option 
                                className={option.isBooked ? 'hidden' : ''} 
                                value={option.hour ? option.hour : option.dateVal} 
                                key={index}
                            >
                                {option.hour ? option.hour : option.dateOption}
                            </option>
                })}    
            </select>
            <svg className="absolute inset-y-0 right-6 my-auto pointer-events-none fill-primary-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>    
        </div>
    )
}