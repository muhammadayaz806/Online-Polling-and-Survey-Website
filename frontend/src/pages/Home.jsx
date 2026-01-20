import { Link } from 'react-router-dom';
import PollGrid from '../components/PollGrid';
import { getStatus } from '../utils/status';

const Home = ({ pollStore }) => {
  const activePolls = pollStore.allPolls.filter((poll) => getStatus(poll) === 'active');
  const featuredPolls = activePolls.filter((poll) => poll.featured);
  const featured = (featuredPolls.length ? featuredPolls : activePolls).slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="card overflow-hidden relative p-6 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-transparent pointer-events-none" />
        <div className="relative">
          <div className="space-y-4 max-w-3xl">
            <p className="inline-flex items-center gap-2 pill bg-primary-100 text-primary-700">
              Fast polls · Live results
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Browse polls, vote instantly, and share with your community.
            </h1>
            <p className="text-slate-600 text-lg">
              Optimized for mobile and desktop so your audience can vote without friction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/polls"
                className="inline-flex items-center justify-center rounded-xl bg-primary-600 text-white px-5 py-3 font-semibold shadow-sm hover:bg-primary-700 transition"
              >
                Browse polls
              </Link>
              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold text-primary-700 bg-primary-50"
              >
                Featured polls
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-primary-700">Featured</p>
            <h2 className="text-xl font-bold text-slate-900">Highlighted polls</h2>
          </div>
          <Link to="/polls" className="text-primary-700 font-semibold">
            View all
          </Link>
        </div>
        <PollGrid polls={featured} />
      </section>
    </div>
  );
};

export default Home;

