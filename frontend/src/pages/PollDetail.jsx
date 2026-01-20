import { Link, useParams } from 'react-router-dom';
import PollGrid from '../components/PollGrid';
import ShareButton from '../components/ShareButton';
import StatusBadge from '../components/StatusBadge';
import VotePanel from '../components/VotePanel';
import { formatCountdown, formatDateTime } from '../utils/format';
import { getStatus, totalVotes } from '../utils/status';

const PollDetail = ({ pollStore }) => {
  const { pollId } = useParams();
  const poll = pollStore.findPoll(pollId);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (!poll) {
    return (
      <div className="space-y-4">
        <div className="card p-6">
          <h1 className="text-xl font-bold text-slate-900">Poll not found</h1>
          <p className="text-slate-600">The poll you are looking for does not exist.</p>
          <Link to="/polls" className="inline-flex mt-3 text-primary-700 font-semibold">
            Go back to polls
          </Link>
        </div>
      </div>
    );
  }

  const status = getStatus(poll);
  const total = totalVotes(poll);

  const related = pollStore.allPolls
    .filter((item) => item.id !== poll.id && item.category === poll.category)
    .slice(0, 2);

  return (
    <div className="space-y-6">
      <div className="card p-5 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="pill bg-primary-50 text-primary-700">{poll.category}</span>
            <StatusBadge poll={poll} />
          </div>
          <ShareButton url={shareUrl} title={poll.title} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{poll.title}</h1>
          <p className="text-slate-600 mt-1">{poll.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="pill bg-slate-100 text-slate-700 capitalize">
            {poll.type} choice
          </span>
          <span className="pill bg-slate-100 text-slate-700">{total} votes</span>
          <span>Closes {formatDateTime(poll.closesAt)}</span>
          <span className="font-semibold text-primary-700">
            {status === 'active' ? formatCountdown(poll.closesAt) : 'Closed'}
          </span>
        </div>
      </div>

      <VotePanel poll={poll} onVote={(selection) => pollStore.vote(poll.id, selection)} />

      <div className="card p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-primary-700">Live results</p>
            <p className="text-slate-600 text-sm">Updates instantly after you vote.</p>
          </div>
        </div>
        <div className="space-y-3">
          {poll.options.map((option) => {
            const percentage = total ? Math.round((option.votes / total) * 100) : 0;
            return (
              <div key={option.id} className="space-y-1">
                <div className="flex items-center justify-between text-sm text-slate-700">
                  <span className="font-semibold">{option.text}</span>
                  <span className="text-slate-500">
                    {percentage}% · {option.votes} votes
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-primary-500 transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {related.length ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-900">Related polls</h3>
            <Link to="/polls" className="text-primary-700 font-semibold text-sm">
              Browse all
            </Link>
          </div>
          <PollGrid polls={related} />
        </div>
      ) : null}
    </div>
  );
};

export default PollDetail;

