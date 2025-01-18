import { useEffect } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./routes";
import Construction from "./routes/construction";

function App() {
  useEffect(() => {
    const initTelegram = () => {
      if (!window.Telegram?.WebApp) {
        setTimeout(initTelegram, 100);
        return;
      }

      try {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
      } catch (error) {
        alert(`Failed to initialize Telegram Web App: ${error instanceof Error ? error.message : String(error)}`);
      }
    };

    initTelegram();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <nav className="bg-gray-800 shadow-lg border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  to="/construction"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Construction
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/construction" element={<Construction />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
