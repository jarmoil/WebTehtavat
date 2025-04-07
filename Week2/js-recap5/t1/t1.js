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


apiUrl = 'https://reqres.in/api/users/1';

async function getData() {
  try{
    data = await fetchData(apiUrl);
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
getData()
