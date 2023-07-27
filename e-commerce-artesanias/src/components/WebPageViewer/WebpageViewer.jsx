import React, { useState, useEffect } from 'react';

const WebpageViewer = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchWebsiteContent = async () => {
      try {
        const url = 'https://ayapelartesanias.sanity.studio/';
        const response = await fetch(url);
        const data = await response.text();
        setContent(data);
      } catch (error) {
        console.error('Error fetching website content:', error);
      }
    };

    fetchWebsiteContent();
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default WebpageViewer;

