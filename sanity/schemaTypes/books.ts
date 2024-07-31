import {defineField, defineType} from 'sanity'

export const bookType = defineType({
  name: 'book',
  title: 'Books',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Book Name',
      type: 'string',
      description: 'Name of the book',
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      description: 'Author of the book',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'string',
      description: 'Date the book was published',
    }),
    defineField({
      name: 'genre',
      title: 'Book Genre',
      type: 'array',
      description: 'Genre of the book',
      of: [{type: 'reference', to: [{type: 'genre'}]}],
    }),
  ],
})
