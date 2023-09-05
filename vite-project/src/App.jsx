import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propertys from "./pages/propertys/Propertys";
import Property from "./pages/property/Property";
import { useState } from "react";
import { UserDetailContextProvider } from "./components/context/Context";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useContext } from "react";
import { UserDetailContext } from "./components/context/Context";
import AllDetails from "./components/context/AllDetails";

const queryClient = new QueryClient();

function App() {
  // const context = useContext(UserDetailContext);
  // console.log(context);

  const [allDeatils, setAllDetails] = useState({
    favourites: [],
    bookings: [],
  });

  return (
    <div className="app">
      <AllDetails.Provider value={{ allDeatils, setAllDetails }}>
        <UserDetailContextProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/property" element={<Propertys />} />
                <Route path="/property/:id" element={<Property />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </UserDetailContextProvider>
      </AllDetails.Provider>
    </div>
  );
}

export default App;
