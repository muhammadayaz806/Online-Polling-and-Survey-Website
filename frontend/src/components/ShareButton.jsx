import { useState } from 'react';

const ShareButton = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: title || 'Poll', url: shareUrl });
        return;
      }
    } catch (error) {
      // fall back to copy
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-primary-200 hover:text-primary-700 transition"
    >
      <span className="text-lg">🔗</span>
      {copied ? 'Link copied!' : 'Share poll'}
    </button>
  );
};

export default ShareButton;

