let _url =
  "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1";

export const getFeeds = async (page) => {
  let options = {
    method: "GET",
  };

  let response = await fetch(`${_url}/${page}`, options);
  let data = await response.json();
  return data;
};
