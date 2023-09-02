import { Header } from "./components/layouts/Header/Header"
import { Footer } from "./components/layouts/Footer/Footer"

export function App() {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <Footer />
        </div>
    )
}