import { IContentItem, Elements, createDeliveryClient } from '@kontent-ai/delivery-sdk';

const previewApiKey = process.env.REACT_APP_api_key || ""
const projectId = process.env.REACT_APP_project_Id || ""

let Client = createDeliveryClient({
    projectId: projectId,
    previewApiKey: previewApiKey 
})


export {Client}