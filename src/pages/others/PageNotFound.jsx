import { ButtonLink } from "../../components/elements/Buttons";

export function PageNotFound() {
    return (
        <div className="py-44 text-center">
            <p className="text-3xl md:text-5xl mb-3">Sorry</p>
            <p className="text-3xl md:text-5xl mb-8 md:mb-12">Page Not Found</p>
            <ButtonLink pathName="/">Back to Home</ButtonLink>
        </div>
    )
}