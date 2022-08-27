export default {
    name: 'ondcid',
    title: 'Ondc-Id',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'aadharid',
        title: 'Aadhar-Id',
        type: 'string',
      },
      {
        name: 'rationid',
        title: 'Ration-Id',
        type: 'string',
      },
      {
        name: 'drivingid',
        title: 'Driving-Id',
        type: 'string',
      },
      {
        name: 'ondcid',
        title: 'Ondc-Id',
        type: 'number',
      },
      {
        name: 'phoneno',
        title: 'Phone',
        type: 'number'
      },
      {
        name: 'jobs',
        title: 'Jobs',
        type: 'array',
        of: [{type:'reference', to: [{type:"profession"}]}]
      },
      {
        name: 'review',
        title: 'Rating',
        type: 'number',
        validation: (Rule) => Rule.required()
            .min(1)
            .max(5)
            .error("Enter between 1 and 5"),
      },
    ],
  }
  