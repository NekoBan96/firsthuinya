document.getElementById('time').textContent = (() => {
    let currentDate = new Date;
    let hour = currentDate.getHours
    console.log(hour);
    if (hour > 16) {return 'Good evening '}
    else if (hour > 10) {return 'Good afternoon '}
    else {return 'Goog Morning '};
})()
