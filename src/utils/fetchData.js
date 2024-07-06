/**
 * Fetch data from the specified API endpoint.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<any>} - A promise that resolves to the JSON response.
 */
export async function fetchData(endpoint) {
  const baseUrl = "http://localhost:3000/api";
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Failed to fetch data: ", e);
    return null;
  }
}
