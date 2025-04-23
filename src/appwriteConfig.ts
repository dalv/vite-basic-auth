import { Client, Account } from 'appwrite';

export const API_ENDPOINT = 'https://fra.cloud.appwrite.io/v1'
export const PROJECT_ID = '68076437002c4c505685'

const client = new Client()
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);  

export const account = new Account(client);

export default client;