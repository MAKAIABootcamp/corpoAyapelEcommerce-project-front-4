import React from 'react';
import './WebpageViewer.scss'; // Import the SCSS file

const WebpageViewer = () => {
  const externalUrl = 'https://ayapelartesanias.sanity.studio/';

  return (
    <div className="webpage-viewer-container">
      <div>
        <h1>Editor de contendio de la pagina</h1>
        <p>
          Haz clic en el botón de abajo para visitar el sitio web externo para editar el contendio de la pagina. Recuerda usar las mismas credenciales que usaste para acceder al administrador
        </p>
        <div className="button-container">
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            <button>Visitar Sitio Web Externo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebpageViewer;
