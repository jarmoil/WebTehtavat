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

apiUrl = 'https://reqres.in/api';

async function getData() {
  try{
    data = await fetchData(`${apiUrl}/unknown/23`);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}
getData()

async function createUser(user) {
  const url = (`${apiUrl}/unknown/23`);
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

async function updateUser(userId, user) {
  const url = `${apiUrl}/unknown/${userId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };

  try {
    const response = await fetchData(url, options);
    console.log('Updated User:', response);
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
}

async function deleteUser(userId) {
  const url = `${apiUrl}/unknown/${userId}`;
  const options = {
    method: 'DELETE'
  };

  try {
    const response = await fetchData(url, options);
    console.log('Deleted User:', response);
  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
}

updateUser(23, { name: 'Jane Doe', job: 'Manager' });
deleteUser(23);
