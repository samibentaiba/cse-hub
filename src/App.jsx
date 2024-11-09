import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/sections/Navbar.jsx";
import Footer from "./components/sections/Footer.jsx";
import { AppProvider } from "./context/AppContext.jsx"; // Import AppProvider
import { Provider } from "react-redux"; // Import the Provider from react-redux
import store from "../Redux/store.js"; // Import your Redux store

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 1); // or (0, 1) if you prefer
  }, [location.pathname]);

  return (
    <Provider store={store}> {/* Wrap the app with the Redux Provider */}
      <AppProvider> {/* Wrap your main app content with AppProvider */}
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </AppProvider>
    </Provider>
  );
}

export default App;
