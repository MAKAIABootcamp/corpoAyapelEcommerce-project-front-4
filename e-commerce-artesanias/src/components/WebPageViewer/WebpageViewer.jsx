import React from 'react';

const WebpageViewer = () => {
  const url = 'https://ayapelartesanias.sanity.studio/';

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src={url}
        title="Webpage Viewer"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default WebpageViewer;
