// src/components/DownloadButton.tsx
import React from 'react';
import { useStoreRedirect } from '../utils/useStoreRedirect';

interface DownloadButtonProps {
  label?: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  label     = 'Download the App',
  className = 'px-6 py-3 bg-[#F5A800] text-white rounded',
}) => {
  const redirectToStore = useStoreRedirect();

  return (
    <button
      onClick={redirectToStore}
      className={className}
    >
      {label}
    </button>
  );
};

export default DownloadButton;
