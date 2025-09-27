





import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './Component/Header';
import FeedbackList from './Component/FeedbackList';
import Card from './Component/Shared/Card';
import AboutIconLink from './Component/AboutIconlink';
import FeedbackStats from './Component/FeedbackStats';
import FeedbackForm from './Component/FeedbackForm';
import Post from './Component/Post';
import './index.css';
import './App.css';
import AboutPage from './Pages/AboutPage';
import { FeedbackProvider } from './Context/FeedbackContext';




function App() {
  return (
    <FeedbackProvider>
      <Router basename="/feedback-app/">
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackList />
                  <FeedbackStats />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
          <Card>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
