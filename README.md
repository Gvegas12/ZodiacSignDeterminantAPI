POST

curl

```
curl --location 'https://zodiacsigndeterminantapi.onrender.com/api/v1/zodiac' \
--header 'Content-Type: application/json' \
--data '{
"dateOfBirth": "1999/12/18"
}'
```

NodeJS

```
const axios = require('axios');
let data = JSON.stringify({
  "dateOfBirth": "1999/12/18"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://zodiacsigndeterminantapi.onrender.com/api/v1/zodiac',
  headers: {
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```
