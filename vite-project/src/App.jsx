import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propertys from "./pages/propertys/Propertys";
import Property from "./pages/property/Property";
import { useState } from "react";
import userDetailContext from "./components/context/Context";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'


const queryClient = new QueryClient()

function App() {
  const [userDetail, setUserDetail] = useState({
    favrites:[],
    booking: [],
    token:[] 
  });


  return (
    <div className="app">
      <userDetailContext.Provider value={{userDetail, setUserDetail}}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/property" element={<Propertys />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
      </userDetailContext.Provider>
    </div>
  );
}

export default App;
