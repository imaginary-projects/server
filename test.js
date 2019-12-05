const axios = require('axios');
const FormData = require('form-data');

const form = new FormData();
form.append('field', 'a,b,c', 'blah.csv');
axios.post('https://api.cloudmersive.com/image/filter/black-and-white', form, {
  headers: form.getHeaders(),
}).then(result => {
  // Handle result…
  console.log(result.data);
});