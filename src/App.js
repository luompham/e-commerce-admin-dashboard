import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import MainLayout from './components/MainLayout';
import DashBoard from './pages/DashBoard';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import BlogCatList from './pages/BlogCatList';
import Orders from './pages/Order';
import Customers from './pages/Customer';
import ColorList from './pages/ColorList';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/admin' element={<MainLayout />} >
          <Route index element={<DashBoard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='blog-category-list' element={<BlogCatList />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color-list' element={<ColorList />} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='brand-list' element={<BrandList />} />
          <Route path='product-list' element={<ProductList />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
