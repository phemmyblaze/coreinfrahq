import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";


export default function Home() {
  return (
    <div className="flex bg-white">
      <Sidebar/>
      
      <div className="flex-1 flex flex-col overflow-auto">
        <Navbar/>
        <Dashboard/>

      </div>
       
    </div>
  );
}
