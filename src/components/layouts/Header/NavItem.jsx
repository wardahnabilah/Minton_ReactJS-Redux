export function NavItem({children}) {
    return (
        <li className="group py-4 md:py-0 pl-12 border-b md:border-none hover:text-accent-yellow hover:cursor-pointer">
            {children}
        </li>
    )
}