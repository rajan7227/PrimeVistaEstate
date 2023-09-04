import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propertys from "./pages/propertys/Propertys";
import Property from "./pages/property/Property";
import { useState } from "react";
import { UserDetailContextProvider } from "./components/context/Context";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useContext } from "react";
import { UserDetailContext }  from "./components/context/Context";

const queryClient = new QueryClient()

function App() {
  // const context = useContext(UserDetailContext);
  // console.log(context);


  return (
    <div className="app">
     <UserDetailContextProvider >
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
    </div>
  );
}

export default App;
