// schemas/banner.js
export default {
    name: 'banner',
    type: 'document',
    title: 'banner',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption'
      },
      {
        name: 'attribution',
        type: 'string',
        title: 'Attribution'
      }
    ]
  }
  