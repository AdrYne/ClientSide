export default {
    name: 'profession',
    title: 'Profession',
    type: 'document',
    fields: [
      {
        name: 'jobname',
        title: 'Job Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
    ],
  }
  