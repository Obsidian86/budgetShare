export default ({ startIndex, endDay }) => {
  const days = [];
  let d = 1;
  for (let i = 0; i < 42; i++) {
    const isOutOfRange = i < startIndex || d > endDay;
    if (isOutOfRange) {
      days.push(<div key={i} className="cal-day" />);
    } else {
      days.push(
        <div className="cal-day" key={i}>
          <span className="day-number">{d}</span>
        </div>
      );
      d++;
    }
  }
  return <div className="day-list">{days}</div>;
};
