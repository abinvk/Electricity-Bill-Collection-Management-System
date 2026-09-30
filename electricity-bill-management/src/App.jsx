import Sidebar from "./components/Sidebar";
import Bills from "./pages/Bills";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Bills />
      </main>
    </div>
  );
}

export default App;