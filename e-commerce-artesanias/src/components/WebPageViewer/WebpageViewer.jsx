import React from 'react';

const WebpageViewer = () => {
  const externalUrl = 'https://ayapelartesanias.sanity.studio/';

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Visor de Páginas Web</h1>
        <p style={{ textAlign: 'center' }}>
          Haz clic en el botón de abajo para visitar el sitio web externo.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            <button style={{ padding: '10px 20px', fontSize: '16px' }}>Visitar Sitio Web Externo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebpageViewer;


