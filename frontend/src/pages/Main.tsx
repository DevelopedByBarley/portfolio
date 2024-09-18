import { About } from "../components/About";
import { Header } from "../components/Header";
import { Inventory } from "../components/Inventory";

export default function Main() {
    return (
        <div className="bg-mainDark">
            <Header />
            <About />
            <Inventory />
        </div>
    )
}