const baseUrl = "https://api.yatricab.com";
const endpoint = "/v1/users/select-cars/outstation";
const sourceCity = "Lucknow";
const sourceState = "Uttar Pradesh";
const destinationCity = "Mumbai";
const destinationState = "Maharashtra";
const time = "19:30";
const startDate = "03-01-2024";
const endDate = "07-01-2024";
const subTripType = "Round Trip";

// Construct the URL with query parameters
const apiUrl = `${baseUrl}${endpoint}?sourceCity=${sourceCity}&sourceState=${sourceState}&destinationCity=${destinationCity}&destinationState=${destinationState}&time=${time}&startDate=${startDate}&endDate=${endDate}&subTripType=${subTripType}`;

// Make a GET request using fetch
fetch(apiUrl)
  .then(response => {
    // Check if the request was successful (status code 200 OK)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Log the response data to the console
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
