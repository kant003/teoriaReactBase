import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { routes } from "./routes/routesConfig";
import { Suspense } from "react";
import Ejem11 from "./pages/Ejem11";
import Ejem25 from "./pages/Ejem25";
import Ejem26 from "./pages/Ejem26";

function App() {
  return (
    
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {routes
              .filter(({ to }) => to !== null)
              .map(({ to, component: Component }) => (
                <Route key={to} path={to || ""} element={<Component />} />
              ))}
            <Route path="users/:id" element={ <Ejem25/> } />
            <Route path="users" element={ <Ejem26/> } />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
