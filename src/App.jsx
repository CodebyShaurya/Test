import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from './components/Navbar'
// import Learn from "./pages/Learn";
// import NotFound from "./pages/NotFound";
// import Courses from "./pages/Courses";
// import MarketPlace from "./pages/MarketPlace";
import CreateApplication from './pages/CreateApplication';
import DeleteApplication from './components/DeleteApplication';
import EditApplication from './components/EditApplication';
import CompleteApplication from './components/CompleteApplication';
import JobDetails from "./pages/JobDetails";
import JobListing from "./pages/JobListing";
import UserProfile from "./pages/UserProfile";

export default function App() {
  return (
    <div>
      <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateApplication />} />
          <Route path="/delete" element={<DeleteApplication />} />
          <Route path="/edit" element={<EditApplication />} />
          <Route path="/complete" element={<CompleteApplication />} />
          <Route path='/jobs' element={<JobListing/>}/>
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/profile" element={<UserProfile />} />
        {/* <Route path="/learn" element={<Learn />} /> */}
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/marketplace" element={<MarketPlace />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
       </Routes>
    </BrowserRouter> 
    </div>
  );
}
