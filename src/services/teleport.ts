const baseURL = "https://api.teleport.org/api/";

export async function getInfosForCity(city: string)
{
    const geoNameURL = await getGeoname(city);
    const cityInfos = await getCityInfo(geoNameURL);

  return cityInfos;
}

async function getGeoname(city: string) {
    const url = baseURL + 'cities/?search=' + city;

    const response = await fetch(url);
    const body = await response.json();
    return body['_embedded']['city:search-results'][0]['_links']['city:item']['href'];
}

async function getCityInfo(url: string)
{
    const response = await fetch(url);
    const body = await response.json();

  return body;
}
