function formatTime(minutes) {
    let days = Math.floor(minutes/1440);
    let hours = Math.floor((minutes - (days*1440))/60);
    let mins = minutes - (days*1440) - (hours*60);
    
    let time = days+' day(s) '+hours+' hour(s) '+mins+' minute(s).';
    return time;
}
formatTime(1985);