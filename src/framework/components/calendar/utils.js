import { MONTH_LIST } from "./constants";

export const lastDayInMonth = (y, m) => new Date(y, m, 0).getDate();

export const firstDayInMonthIndex = (y, m) => new Date(`${y}-${m}-01`).getDay();

export const getMonthByIndex = (ind) => MONTH_LIST[ind - 1];
