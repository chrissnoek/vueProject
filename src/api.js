const API_KEY = process.env.VUE_APP_RAWG_API_KEY;
const base = 'https://api.rawg.io/api/';
const key = `?key=${API_KEY}`;

const getCurrentMonth = () => {
  const month = new Date.getMonth() + 1;
  if(month < 10) {
    return `0${month}`
  } else {
    return `${month}`
  }
}
const getCurrentDay = () => {
  const day = new Date.getDay() + 1;
  if(day < 10) {
    return `0${day}`
  } else {
    return `${day}`
  }
}

const currentYear = new Date.getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games${key}&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export default popularGamesURL = () => `${base}${popularGames}`


