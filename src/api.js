const API_KEY = process.env.VUE_APP_RAWG_API_KEY;
const base = 'https://api.rawg.io/api/';
const key = `?key=${API_KEY}`;
const today = new Date();

const getCurrentMonth = () => {
  const month = today.getMonth() + 1;
  if(month < 10) {
    return `0${month}`
  } else {
    return `${month}`
  }
}
const getCurrentDay = () => {
  const day = today.getDay() + 1;
  if(day < 10) {
    return `0${day}`
  } else {
    return `${day}`
  }
}
const currentYear = today.getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const popularGamesURL = `${base}${popularGames}`;
const upcomingGamesURL = `${base}${upcomingGames}`;
const newGamesURL = `${base}${newGames}`;
const singleGameURL = (gameId) => `${base}games/${gameId}${key}`;

const searchSingleGameURL = (gameName) => `${base}games${key}&search=${gameName}&page_size=9`;

export {
 popularGamesURL,
 upcomingGamesURL,
 newGamesURL,
 singleGameURL,
 searchSingleGameURL
} 


