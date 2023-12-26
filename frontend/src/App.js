import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ActivationPage from './pages/ActivationPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import BestSellingPage from './pages/BestSellingPage';
import EventsPage from './pages/EventsPage';
import FAQPage from './pages/FAQPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './ProtectedRoute'
import { useSelector } from 'react-redux'
export default function App() {

  const { authenticated } = useSelector((state) => state.user.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignupPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
        <Route path='/products' element={<ProductsPage />}></Route>
        <Route path='/product/:name' element={<ProductDetailsPage />}></Route>
        <Route path='/best-selling' element={<BestSellingPage />}></Route>
        <Route path='/events' element={<EventsPage />}></Route>
        <Route path='/faq' element={<FAQPage />}></Route>
        <Route path='/profile' element={
        <ProtectedRoute authenicated={authenticated}>
          <ProfilePage />
        </ProtectedRoute>}>
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  )
}
