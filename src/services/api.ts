// api.js
import axios from 'axios';

const BASE_URL = 'https://api.testvalley.kr';

// Function to filter collections data locally
const filterCollectionsData = (collections:any, filter = true) => {
  if (filter) {
    return collections.filter((item: any) => item.type === 'SINGLE' && item.viewType === 'TILE');
  }
  return collections;
};

export const fetchMainBannerData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/main-banner/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching main banner data:', error);
    throw error;
  }
};

export const fetchMainShortcutData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/main-shortcut/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching main shortcut data:', error);
    throw error;
  }
};

export const fetchCollections = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/collections?prearrangedDiscount`);
    
    // Filter the data with type: "SINGLE" and viewType: "TILE"
    const filteredCollections = filterCollectionsData(response.data.items);
    const otherCollections = filterCollectionsData(response.data.items, false);

    
    // return filteredData;

    return {filteredCollections, otherCollections}
  } catch (error) {
    console.error('Error fetching filtered collections data:', error);
    throw error;
  }
};