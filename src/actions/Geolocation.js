import fetch from 'isomorphic-fetch'

const RETRIEVE_GEOLOCATION = 'RETRIEVE_GEOLOCATION';

export function getLocation() {
  if (!navigator.geolocation){
    throw new Error('Geolocation is not supported by your browser');
  }

  const location = new Promise((success, failure) => {
    navigator.geolocation.getCurrentPosition((position) => {
      success(position);
    }, () => {
      failure(new Error('Error occurred'));
    });
  });

  return {
    type: RETRIEVE_GEOLOCATION,
    payload: location
  }
};

