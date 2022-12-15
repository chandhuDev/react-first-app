

export default {
    name: 'animal',
    type: 'document',
    title: 'userDetails',
    
    fields: [
      {
        name: 'userName',
        type: 'string',
        title: 'UserName',
        validation: Rule => Rule.required().min(10).max(80).warning('please complete the field to move futherly')
      },
      {
        name:'age',
        title:'Age',
        type:'number'
      }
     
    ]
  }