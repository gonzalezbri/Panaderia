import BreadList from "../components/BreadList";
import DashNav from "../components/DashNav";

export default function dashboard() {
    return (
        <main className="px-8">
        <DashNav/>
        <BreadList/>
        </main>
    )
}