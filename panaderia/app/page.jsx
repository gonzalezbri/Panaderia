
import Jumbotron from "./components/Jumbotron";
import Slideshows from "./components/Slideshows";
import AboutTron from "./components/aboutBaker";


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Jumbotron/>
      <AboutTron/>
      <Slideshows/>
    </main>
  )
}
