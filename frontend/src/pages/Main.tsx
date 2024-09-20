import { useCookies } from "react-cookie";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Inventory } from "../components/Inventory";

export default function Main() {
    const [cookies] = useCookies(['visited']);

    if(!cookies.visited) return null;

    return (
        <div className="bg-mainDark">
            <Header />
            <About />
            <Inventory />
        </div>
    )
}