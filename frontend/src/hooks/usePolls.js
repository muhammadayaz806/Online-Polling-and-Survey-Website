import { useMemo, useState } from 'react';
import { mockPolls } from '../data/mockPolls';
import { getStatus } from '../utils/status';

export const usePolls = (seed = mockPolls) => {
  const [polls, setPolls] = useState(seed);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');

  const categories = useMemo(
    () => ['all', ...new Set(seed.map((poll) => poll.category))],
    [seed]
  );

  const filteredPolls = useMemo(() => {
    const q = query.trim().toLowerCase();
    return polls
      .filter((poll) => {
        const matchesQuery =
          !q ||
          poll.title.toLowerCase().includes(q) ||
          poll.description.toLowerCase().includes(q) ||
          poll.category.toLowerCase().includes(q);

        const matchesCategory = category === 'all' || poll.category === category;
        const matchesStatus = status === 'all' || getStatus(poll) === status;
        return matchesQuery && matchesCategory && matchesStatus;
      })
      .sort((a, b) => new Date(a.closesAt) - new Date(b.closesAt));
  }, [polls, query, category, status]);

  const findPoll = (pollId) => polls.find((poll) => poll.id === pollId);

  const vote = (pollId, optionIds = []) => {
    const selected = Array.isArray(optionIds) ? optionIds : [optionIds];
    setPolls((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId) return poll;
        return {
          ...poll,
          options: poll.options.map((option) =>
            selected.includes(option.id)
              ? { ...option, votes: (option.votes || 0) + 1 }
              : option
          )
        };
      })
    );
  };

  return {
    polls: filteredPolls,
    allPolls: polls,
    categories,
    query,
    setQuery,
    category,
    setCategory,
    status,
    setStatus,
    findPoll,
    vote
  };
};

