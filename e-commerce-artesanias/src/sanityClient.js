import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'hu2nmken',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

const data = await client.fetch(`count(*)`)
console.log(`Number of documents: ${data}`)


export default sanityClient
