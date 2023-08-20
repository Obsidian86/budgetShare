import { useState } from "react";
import RenderDays from "./RenderDays";
import StyledCalendar from "./StyledCalendar";
import * as utils from "./utils";

export default () => {
  const [date, setDate] = useState({ year: 2023, day: 2, month: 7 });

  const changeMonth = (val) =>
    setDate((currDate) => {
      const newMonthData = { ...currDate, month: currDate.month + val };
      if (newMonthData.month > 12) {
        newMonthData.month = 1;
        newMonthData.year = newMonthData.year + 1;
      }
      if (newMonthData.month === 0) {
        newMonthData.month = 12;
        newMonthData.year = newMonthData.year - 1;
      }
      return newMonthData;
    });

  return (
    <StyledCalendar>
      <div>
        {utils.getMonthByIndex(date.month).short}-{date.day}-{date.year}
        <button onClick={() => changeMonth(-1)}>p</button>
        <button onClick={() => changeMonth(1)}>n</button>
      </div>
      <RenderDays
        startIndex={utils.firstDayInMonthIndex(date.year, date.month)}
        endDay={utils.lastDayInMonth(date.year, date.month)}
      />
    </StyledCalendar>
  );
};
