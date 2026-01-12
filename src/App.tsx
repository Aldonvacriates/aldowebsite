import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import BlogDetails from "./pages/BlogDetails.tsx";
import BlogGrids from "./pages/BlogGrids.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog-grids" element={<BlogGrids />} />
        <Route path="blog-details" element={<BlogDetails />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
