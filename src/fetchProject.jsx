import { createClient } from "contentful";

const client = createClient({
  space: 'naeqydv0ncdc',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

client.getEntries({content_type: 'projects'}).then((response)=> {
  console.log(response);
})