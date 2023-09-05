"use strict"

const buttons = document.querySelector(".buttons");

const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minets = document.getElementById('minets');
const seconds = document.getElementById('seconds');

const title = document.querySelector('.timer_date')

const dayText = document.getElementById('dayText');
const hourText = document.getElementById('hourText');
const minetText = document.getElementById('minetText');
const secondText = document.getElementById('secondText');


let day;
let hour;
let minet;
let second;

function timeToText(number,textArray){
    number %= 100;
    if(number > 10 && number < 20){
        return textArray[1]
    }                                     /// [день,дней,дня] [час,часов,часа] [минута,минут,минуты] [секунда,секунд,секунды]
    if(number%10 > 1 && number%10 < 5){
        return textArray[2]
    }
    if(number%10 === 1){
        return textArray[0]
    }
    return textArray[1]

}


const a = setInterval(timeCounter,1000)

const dedline = new Date(2023,8,5,7)

title.innerHTML = dedline.toString().slice(0,-40)


function timeCounter(){     
    let timeNow = new Date().getTime()
    
    let currentTime = dedline.getTime() - timeNow;

    let date = Math.floor(currentTime / 1000);

    day = Math.floor(date / 60 / 60 / 24)
    hour = Math.floor(date / 60 / 60) % 24
    minet = Math.floor(date / 60) % 60;
    second = date % 60
    
    if(currentTime < 0){
        days.innerHTML = "00"
        hour.innerHTML = "00"
        minets.innerHTML = "00"
        seconds.innerHTML = "00"
        clearInterval(a)
    }else{
        days.innerHTML = day < 10 ? "0" + day : day
        hours.innerHTML = hour < 10 ? "0" + hour : hour
        minets.innerHTML = minet < 10 ? "0" + minet : minet
        seconds.innerHTML = second < 10 ? "0" + second : second
    }
    
    dayText.innerHTML = timeToText(day,["день","дней","дня"])
    hourText.innerHTML = timeToText(hour,["час","часов","часа"])
    minetText.innerHTML = timeToText(minet,["минута","минут","минуты"])
    secondText.innerHTML = timeToText(second,["секунда","секунд","секунды"])
}




