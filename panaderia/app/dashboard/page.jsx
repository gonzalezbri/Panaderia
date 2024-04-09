import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BreadList from "../components/BreadList";
import DashNav from "../components/DashNav";

const ServerProtectedPage = async () =>{
    const session = await getServerSession(authOptions)

    if(!session) {
        redirect('/Login?callbackUrl=/dashboard')
    }

    return(
        <main className="px-8">
        <DashNav/>
        <BreadList/>
        </main>
    )
}

export default ServerProtectedPage