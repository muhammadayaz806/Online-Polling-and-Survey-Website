import { getStatus, statusCopy, statusTone } from '../utils/status';

const StatusBadge = ({ poll }) => {
  const status = typeof poll === 'string' ? poll : getStatus(poll);
  return (
    <span className={`pill ${statusTone[status] || 'bg-slate-200 text-slate-700'}`}>
      {statusCopy[status] || status}
    </span>
  );
};

export default StatusBadge;

