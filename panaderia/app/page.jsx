
import Jumbotron from "./components/Jumbotron";
import Slideshows from "./components/Slideshows";


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Jumbotron/>
      <Slideshows/>
    </main>
  )
}
