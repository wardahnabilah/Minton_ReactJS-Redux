import { Link } from "react-router-dom"

export function ButtonLink({pathName, children: label}) {
    return (
        <Link to={pathName} className="px-4 py-2 rounded-full bg-primary-red shadow-lg hover:bg-primary-red-dark shadow-primary-red/40 text-white">{label}</Link>
    )
}