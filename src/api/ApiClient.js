import { useState } from 'react';
import axios from "axios";
import { apiKey } from "./config";

const ApiClient = ()  => {
  //TODO Possible need to handle max memory
  const [tagResponses, setTagResponses] = useState({});

  const getByTags = (tags) => {
    return tagResponses[tags]
    ? Promise.resolve(tagResponses[tags])
    : fetchRequest(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          const tagRes = {};
          tagRes[tags] = response;
          setTagResponses({...tagResponses, ...tagRes})
          return response;
        });
  }

  const fetchRequest = (url) => {
    return axios
      .get(url)
      .catch(error => {
        console.log(
          "Encountered an error with fetching data",
          error
        );
      });
  };

  return { getByTags }
}
export default ApiClient;

