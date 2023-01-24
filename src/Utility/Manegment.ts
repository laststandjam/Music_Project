import { createManagementClient } from '@kontent-ai/management-sdk';



const test =async ()=>{
  
  const client = createManagementClient({
    projectId: 'ac256208-f87d-0098-2cec-d95d0c386c73', // id of your Kontent.ai project
    
    apiKey: 'ew0KICAiYWxnIjogIkhTMjU2IiwNCiAgInR5cCI6ICJKV1QiDQp9.ew0KICAianRpIjogIjZiNTY0MjM3YmVhZTRkYzhhMzg0NDJhNWEyMzI1OWYwIiwNCiAgImlhdCI6ICIxNjYzNjgxOTUxIiwNCiAgImV4cCI6ICIyMDA5MjgxOTUxIiwNCiAgInZlciI6ICIyLjEuMCIsDQogICJ1aWQiOiAic3NvXzZiMDE5NWI3LTlkNzEtNDgwOC1hNDg4LWVkNTBhYjk0ZjgwYSIsDQogICJwcm9qZWN0X2lkIjogImFjMjU2MjA4Zjg3ZDAwOTgyY2VjZDk1ZDBjMzg2YzczIiwNCiAgImF1ZCI6ICJtYW5hZ2Uua2VudGljb2Nsb3VkLmNvbSINCn0.ajcAGlIn7eJkHreWWVW3cErYno66CtMihIGKrLr0rOM' // Content management API token
});
const response = await client.viewContentType()
  .byTypeCodename("album")
  // .byTypeCodename('hosted_video')
  .toPromise();
  console.log( response)
}

export{test}