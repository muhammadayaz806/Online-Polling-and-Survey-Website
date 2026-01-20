export const formatDateTime = (value) => {
  try {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(new Date(value));
  } catch (error) {
    return value;
  }
};

export const formatCountdown = (end) => {
  const endDate = new Date(end).getTime();
  const now = Date.now();
  const diff = endDate - now;

  if (diff <= 0) return 'Ended';

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d left`;
  if (hours > 0) return `${hours}h left`;
  return `${minutes}m left`;
};

