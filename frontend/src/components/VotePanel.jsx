import { useMemo, useState } from 'react';
import { totalVotes } from '../utils/status';

const VotePanel = ({ poll, onVote }) => {
  const [selected, setSelected] = useState([]);
  const [voted, setVoted] = useState(false);
  const isMultiple = poll.type === 'multiple';

  const total = useMemo(() => totalVotes(poll), [poll]);

  const toggleOption = (optionId) => {
    if (isMultiple) {
      setSelected((prev) =>
        prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]
      );
    } else {
      setSelected([optionId]);
    }
  };

  const handleSubmit = () => {
    if (!selected.length) return;
    onVote(selected);
    setVoted(true);
  };

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-700">Vote now</p>
          <p className="text-xs text-slate-500">
            {isMultiple ? 'Select one or more options' : 'Select one option'}
          </p>
        </div>
        <span className="pill bg-slate-100 text-slate-700">{total} total votes</span>
      </div>

      <div className="space-y-3">
        {poll.options.map((option) => {
          const checked = selected.includes(option.id);
          return (
            <label
              key={option.id}
              className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-3 cursor-pointer transition ${
                checked ? 'border-primary-300 bg-primary-50' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type={isMultiple ? 'checkbox' : 'radio'}
                  checked={checked}
                  onChange={() => toggleOption(option.id)}
                  className="h-4 w-4 accent-primary-600"
                />
                <span className="text-slate-800 font-medium">{option.text}</span>
              </div>
              <span className="text-sm text-slate-500">{option.votes} votes</span>
            </label>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selected.length}
        className="w-full inline-flex justify-center rounded-xl bg-primary-600 px-4 py-3 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition"
      >
        {voted ? 'Vote recorded' : 'Submit vote'}
      </button>
    </div>
  );
};

export default VotePanel;

