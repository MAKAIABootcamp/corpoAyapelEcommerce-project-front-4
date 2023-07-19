// schemas/banner.js
export default {
    name: 'banner',
    type: 'document',
    title: 'banner',
    fields: [
      {
        name: 'image1',
        type: 'image',
        title: 'Imagen desktop',
        options: {
          hotspot: true 
        }
      },
      {
        name: 'image2',
        type: 'image',
        title: 'Imagen mobile',
        options: {
          hotspot: true 
        }
      },
      {
        name: 'title',
        type: 'string',
        title: 'Titulo'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Descripcion'
      }
      ,
      {
        title: 'ImageURL',
        name: 'imageUrl',
        type: 'url'
      }
    ]
  }
  