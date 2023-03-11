function manageAppointments(appointments) {
    const schedule = {};
    const successfulMeetings = [];
    appointments.forEach(appointment => {
      const [weekday, person] = appointment.split(' ');
      if (schedule[weekday]) {
        console.log(`Conflict on ${weekday}!`);
      } else {
        schedule[weekday] = person;
        successfulMeetings.push(appointment);
        console.log(`Scheduled for ${weekday}`);
      }
    });
    successfulMeetings.forEach(meeting => {
      const [weekday, person] = meeting.split(' ');
      console.log(`${weekday} -> ${person}`);
    });
  }

  manageAppointments(['Monday Peter',
  'Wednesday Bill',
  'Monday Tim',
  'Friday Tim']
 )