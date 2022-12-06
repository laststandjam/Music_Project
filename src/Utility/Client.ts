import { IContentItem, Elements, createDeliveryClient, camelCasePropertyNameResolver } from '@kontent-ai/delivery-sdk';

const previewApiKey = process.env.REACT_APP_api_key || ""
const projectId = process.env.REACT_APP_project_Id || ""

let Client = createDeliveryClient({
    projectId: projectId,
    previewApiKey: previewApiKey, 
    propertyNameResolver:camelCasePropertyNameResolver
})


export {Client}