import HomePage from './components/pages/HomePage.jsx';
import Photographer from './components/pages/PhotographerPage.jsx';
import MenuPage from './components/pages/MenuPage.jsx';
import PortfolioPage from './components/pages/PortfolioPage.jsx';
import ImagePage from './components/pages/ImagePage.jsx';
import Layout from './components/Layout.jsx';
import LogInPage from './components/pages/LogIn.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx'
//import LuduPage from './components/pages/LuduPage.jsx'

function App() {
  return (     
    <>
      <BrowserRouter>
      <AuthProvider>
       <Layout>
        <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/logIn" element={<LogInPage/>}/>
           <Route path="/*" element={<ProtectedRoute/>}>
             <Route path="photographer" element={<Photographer/>}/>
             <Route path="MenuPage" element={<MenuPage/>}/>
             <Route path="portfoliopage" element={<PortfolioPage/>}/>
              <Route path="ImagePage" element={<ImagePage/>}/>
           </Route>
        </Routes>
      </Layout>
      </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
