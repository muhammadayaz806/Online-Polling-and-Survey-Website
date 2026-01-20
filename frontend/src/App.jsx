import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Browse from './pages/Browse';
import Home from './pages/Home';
import PollDetail from './pages/PollDetail';
import { usePolls } from './hooks/usePolls';

const navClasses = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition ${
    isActive ? 'text-primary-700 bg-primary-50' : 'text-slate-600 hover:text-slate-900'
  }`;

function App() {
  const pollStore = usePolls();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-100 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg text-primary-700">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
              PP
            </span>
            PulsePolls
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navClasses}>
              Home
            </NavLink>
            <NavLink to="/polls" className={navClasses}>
              Browse Polls
            </NavLink>
          </nav>
          <Link
            to="/polls"
            className="inline-flex items-center justify-center rounded-xl bg-primary-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-primary-700"
          >
            Browse & Vote
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home pollStore={pollStore} />} />
          <Route path="/polls" element={<Browse pollStore={pollStore} />} />
          <Route path="/polls/:pollId" element={<PollDetail pollStore={pollStore} />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-sm text-slate-600">
          <div>PulsePolls — fast, responsive polling UI for your surveys.</div>
          <div className="flex items-center gap-3">
            <Link to="/polls" className="hover:text-primary-600">
              Browse polls
            </Link>
            <span className="hidden md:inline text-slate-300">•</span>
            <a className="hover:text-primary-600" href="mailto:hello@pulsepolls.fake">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

