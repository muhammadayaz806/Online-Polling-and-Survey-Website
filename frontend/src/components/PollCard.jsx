import { Link } from 'react-router-dom';
import { formatCountdown, formatDateTime } from '../utils/format';
import { getStatus, totalVotes } from '../utils/status';
import StatusBadge from './StatusBadge';

const PollCard = ({ poll }) => {
  const status = getStatus(poll);
  const votes = totalVotes(poll);

  return (
    <Link
      to={`/polls/${poll.id}`}
      className="card p-5 flex flex-col gap-3 hover:-translate-y-1 transition duration-150"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill bg-primary-50 text-primary-700">{poll.category}</span>
            <StatusBadge poll={poll} />
          </div>
          <h3 className="text-lg font-semibold leading-snug text-slate-900">{poll.title}</h3>
        </div>
        {poll.featured && (
          <span className="pill bg-indigo-50 text-indigo-700 border border-indigo-100">Featured</span>
        )}
      </div>
      <p className="text-slate-600 text-sm">{poll.description}</p>

      <div className="flex flex-wrap items-center justify-between text-sm text-slate-500 gap-2 pt-2 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span className="pill bg-slate-100 text-slate-700 capitalize">{poll.type} choice</span>
          <span>{poll.options.length} options</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{votes} votes</span>
          <span className="text-primary-700 font-medium">
            {status === 'active' ? formatCountdown(poll.closesAt) : formatDateTime(poll.closesAt)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PollCard;

