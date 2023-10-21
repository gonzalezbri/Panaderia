import BreadList from "../components/BreadList";
import DashNav from "../components/DashNav";

export default function dashboard() {
    return (
        <main className="p-24">
        <DashNav/>
        <BreadList/>
        </main>
    )
}