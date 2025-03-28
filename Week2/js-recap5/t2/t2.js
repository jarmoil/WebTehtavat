async function fetchData(url, options= {}) {
  const response = await fetch(url, options);
  const json = await response.json();
  if(!response.ok) {
    if(json.message){
      throw new Error(`${json.message}, code: ${response.statusText}`);
    }
    throw new Error(`${response.status}, occured`);
  }
  return json;
};

async function createUser(user) {
  const url = 'https://reqres.in/api/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };

  try {
    const response = await fetchData(url, options);
    console.log('Response Data:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

createUser({ name: 'John Doe', job: 'Developer' });
