import Sidebar from "./components/Sidebar";
import Collectors from "./pages/Collectors";

function App() {
  return (
    <div>
      <Sidebar />

      <main>
        <Collectors />
      </main>
    </div>
  );
}

export default App;