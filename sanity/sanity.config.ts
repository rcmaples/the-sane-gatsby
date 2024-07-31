import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'rcmaples',

  projectId: 'mrsdi6mo',
  dataset: 'sane-gatsby',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
