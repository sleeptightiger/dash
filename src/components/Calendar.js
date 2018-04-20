import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <h1>Calendar</h1>
        <div className="embedded">
          <iframe src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=gerry%40chakradojo.com&amp;color=%231B887A&amp;ctz=America%2FChicago" width="800" height="600" scrolling="no"></iframe>
        </div>

      </div>
    );
  }
}

export default Calendar;
