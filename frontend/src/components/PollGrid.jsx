import PollCard from './PollCard';
import EmptyState from './EmptyState';

const PollGrid = ({ polls }) => {
  if (!polls.length) {
    return <EmptyState message="No polls match your filters yet." />;
  }

  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
      {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll} />
      ))}
    </div>
  );
};

export default PollGrid;

