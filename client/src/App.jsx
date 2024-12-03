import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/admin/Login";
import AdminLayout from "./components/AdminLayout";
import ShowBlogs from "./pages/admin/ShowBlogs";
import CreateBlog from "./pages/admin/CreateBlog";
import ShowMembers from "./pages/admin/ShowMembers";
import CreateMembers from "./pages/admin/CreateMembers";
import ShowServices from "./pages/admin/ShowServices";
import CreateService from "./pages/admin/CreateService";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/admin/login" element={<Login/>} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Admin />} />

          <Route path="blogs/list" element={<ShowBlogs />} />
          <Route path="blogs/create" element={<CreateBlog />} />
          <Route path="members/list" element={<ShowMembers />} />
          <Route path="members/create" element={<CreateMembers />} />
          <Route path="services/list" element={<ShowServices />} />
          <Route path="services/create" element={<CreateService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
