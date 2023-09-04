export function SelectForm({name, options, label}) {
    return (
        <div className="relative">
            <select name={name} defaultValue="" className="w-full rounded-2xl px-7 py-2 hover:cursor-pointer text-primary-dark  bg-primary-light/60 dark:bg-accent-grey outline-none focus:outline-accent-yellow appearance-none">
                <option value="" disabled>{label}</option>
                { options.map((option, index) => {
                    return <option value={option} key={index}>{option}</option>
                })}    
            </select>
            <svg className="absolute inset-y-0 right-6 my-auto pointer-events-none fill-primary-dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path></svg>    
        </div>
    )
}