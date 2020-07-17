const location = "Buenos Aires,ar";
const api_key = "aaaff6f1170ee299c73370dd6829584f";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
