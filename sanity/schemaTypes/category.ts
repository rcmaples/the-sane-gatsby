import {defineField, defineType} from 'sanity'

export const genreType = defineType({
  name: 'genre',
  title: 'Genre',
  type: 'document',
  fields: [
    defineField({
      name: 'Genre',
      title: 'Book Genre',
      type: 'string',
      description: 'Genre of the book',
    }),
  ],
})
