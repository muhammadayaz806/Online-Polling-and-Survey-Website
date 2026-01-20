export const getStatus = (poll) => {
  const now = new Date();
  const start = new Date(poll.startsAt);
  const end = new Date(poll.closesAt);

  if (now < start) return 'upcoming';
  if (now > end) return 'closed';
  return 'active';
};

export const statusCopy = {
  active: 'Active',
  upcoming: 'Upcoming',
  closed: 'Closed'
};

export const statusTone = {
  active: 'bg-emerald-100 text-emerald-700',
  upcoming: 'bg-amber-100 text-amber-700',
  closed: 'bg-slate-200 text-slate-700'
};

export const totalVotes = (poll) =>
  poll.options.reduce((sum, option) => sum + (option.votes || 0), 0);

