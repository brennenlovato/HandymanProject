import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/about/About';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Workers from './components/workers/Workers';
import Comments from './components/comments/Comments';
import Services from './components/services/Services';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/workers' element={<Workers />} />
      <Route path='/:workerId/services' element={<Services />} />
      <Route path='/:serviceId/comments' element={<Comments />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;