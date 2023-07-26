export default {
    name: 'banner-testimonies',
    type: 'document',
    title: 'Banners Testimonios',
    fields: [
      {
        name: 'image1',
        type: 'image',
        title: 'Imagen desktop',
        options: {
          hotspot: true 
        },
        validation: (Rule) => Rule.required('Este campo es requerido')
      },
      {
        name: 'image2',
        type: 'image',
        title: 'Imagen mobile',
        options: {
          hotspot: true 
        },
        validation: (Rule) => Rule.required('Este campo es requerido')
      },
      {
        name: 'title',
        type: 'string',
        title: 'Titulo',
        validation: (Rule) => Rule.required('Este campo es requerido')
      },
      {
        name: 'description',
        type: 'string',
        title: 'Descripcion',
        validation: (Rule) => Rule.required('Este campo es requerido')
      }
    ]
  }
  