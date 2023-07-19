// schemas/products.js
export default {
  name: 'products',
  type: 'document',
  title: 'Productos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del producto',
      validation: (Rule) => Rule.required('Este campo es requerido')
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Imagen 1',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required('Este campo es requerido')
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Imagen 2',
      options: {
        hotspot: true
      },
    },
    {
      name: 'image3',
      type: 'image',
      title: 'Imagen 3',
      options: {
        hotspot: true
      },
    }
    ,
    {
      name: 'image4',
      type: 'image',
      title: 'Imagen 4',
      options: {
        hotspot: true
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descripción corta',
      validation: (Rule) => Rule.required('Este campo es requerido')
    },
    {
      name: 'description2',
      type: 'string',
      title: 'Descripción larga'
    },
    {
      title: 'quantity',
      name: 'Cantidad',
      type: 'number',
      validation: (Rule) => Rule.required().positive().error('La cantidad debe ser un número positivo')
    },
    {
      title: 'price',
      name: 'Precio',
      type: 'number',
      validation: (Rule) => Rule.required().positive().error('La cantidad debe ser un número positivo')
    },
    {
      name: 'category',
      type: 'string',
      title: 'Categoría Principal',
      validation: (Rule) => Rule.required('Este campo es requerido')
    },
    {
      name: 'category2',
      type: 'string',
      title: 'Categoría Secundaria'
    },
    {
      name: 'category3',
      type: 'string',
      title: 'Categoría Terciaria'
    },
    {
      name: 'size',
      type: 'object',
      title: 'Tamaño',
      validation: (Rule) => Rule.required('Este campo es requerido'),
      fields: [
        {
          name: 'width',
          type: 'number',
          title: 'Ancho (cm)',
          validation: (Rule) =>
            Rule.required().min(0).precision(2).error('El ancho debe ser un número positivo en centímetros, estimelo si no lo tiene claro')
        },
        {
          name: 'height',
          type: 'number',
          title: 'Altura (cm)',
          validation: (Rule) =>
            Rule.required().min(0).precision(2).error('La altura debe ser un número positivo en centímetros, estimelo si no lo tiene claro')
        }
      ]
    },
    {
      name: 'recomendations',
      type: 'string',
      title: 'Recomendaciones del producto para su cuidado o uso',
      validation: (Rule) => Rule.required('Este campo es requerido')
    }
  ]
}
