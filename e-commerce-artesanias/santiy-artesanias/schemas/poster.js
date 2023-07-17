// schemas/poster.js
export default {
  name: 'poster',
  type: 'document',
  title: 'Poster',
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
