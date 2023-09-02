export function NavItem({children}) {
    return (
        <li className="group max-md:py-4 pl-12 max-md:border-b hover:text-accent-yellow hover:cursor-pointer">
            {children}
        </li>
    )
}