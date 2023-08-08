import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroCaption',
      title: 'Hero Caption',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          title: 'image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'array',
      of: [
        {
          title: 'Testimonial',
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'testimonialAuthor',
      title: 'Testimonial Author',
      type: 'string',
    }),
    defineField({
      name: 'testimonialPosition',
      title: 'Testimonial Author Position',
      type: 'string',
    }),
  ],
})
