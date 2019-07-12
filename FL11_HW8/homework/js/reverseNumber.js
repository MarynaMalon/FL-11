function reverseNumber(num) {
    let revNum = 0;
    let wrk = 0;
    let flag = 1;

    if (num<0) {
        num*=-1;
        flag = -1;
    }

    while(num) {
        wrk = num % 10;
        revNum = (revNum*10) + wrk;
        num = Math.floor(num/10);
    }

    if (flag<0) {
        revNum*=flag;
    }
    return revNum;
}
reverseNumber(-16786);