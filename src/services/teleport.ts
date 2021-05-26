const baseURL = "https://api.teleport.org/api/";

export async function getInfosForCity(city: string) {
  let geoNameURL = await getGeoname(city);
  let cityInfos = await getCityInfo(geoNameURL);

  return cityInfos;
}

async function getGeoname(city: string) {
  let url = baseURL + "cities/?search=" + city;

  let response = await fetch(url);
  let body = await response.json();
  return body["_embedded"]["city:search-results"][0]["_links"]["city:item"]["href"];
}

async function getCityInfo(url: string) {
  let response = await fetch(url);
  let body = await response.json();

  return body;
}
