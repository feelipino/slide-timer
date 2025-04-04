// Event Organization
const startTime = "14:00";
const endTime = "17:00";
const breakDuration = "00:30"; //minutes
const slideNum = 40;

// Function to convert the time to minutes
function convertTimetoMinutes(time) {
    let timeParts = time.split(":");
    return Number(timeParts[0] * 60 + Number(timeParts[1]));
}

// Time in minutes
const startTimeinMinutes = convertTimetoMinutes(startTime);
const endTimeinMinutes = convertTimetoMinutes(endTime);
const eventDurationinMinutes = endTimeinMinutes - startTimeinMinutes;
const breakDurationinMinutes = convertTimetoMinutes(breakDuration);
const avaliableTimetoPresent = eventDurationinMinutes - breakDurationinMinutes

// Break
const breakStart = startTimeinMinutes + (eventDurationinMinutes - breakDurationinMinutes) / 2;
const breakEnd = breakStart + breakDurationinMinutes

// Slide per minutes
const timePerSlide = avaliableTimetoPresent / slideNum;

//Event first part time code setup
const firstPartSlideAmount = slideNum / 2;

for (let i = 1; i <= firstPartSlideAmount; i++) {
    let slideTimeRange = startTimeinMinutes + ( timePerSlide * i );
    let hours = Math.floor(slideTimeRange / 60);
    let minutes = Math.floor(slideTimeRange % 60);
    console.log(`Slide ${i} by ${hours}:${minutes}h`);
}

function breakTimetoHours (time) {
    let hours = Math.floor(time/ 60);
    let minutes = time % 60;
    return hours + ":" + Math.floor(minutes)
}

console.log(`Break ${breakTimetoHours(breakStart)}h to ${breakTimetoHours(breakEnd)}h`)

//Event second time code setup
const secondPartSlideAmount = slideNum / 2;

for (let i = 1; i <= secondPartSlideAmount; i++) {
    let slideTimeRange = breakEnd + ( timePerSlide * i );
    let hours = Math.floor(slideTimeRange / 60);
    let minutes = Math.floor(slideTimeRange % 60);
    let slideCount = secondPartSlideAmount + i
    console.log(`Slide ${slideCount} by ${hours}:${minutes}h`);
}


/*
function firstPartApresentation () {
    let slideTimeRange = startTimeinMinutes + timePerSlide;
    console.log(slideTimeRange)

    function slideTimeRangetoHours (slideTimeRange) {
        let hours = Math.floor(slideTimeRange / 60);
        let minutes = slideTimeRange % 60;
        return hours + ":" + Math.floor(minutes)
    }

    
    for (let i = 1; i <= firstPartSlideAmount; i++) {
    console.log(`Slide ${i} needs to be presented by ${slideTimeRangetoHours(slideTimeRange)}`)
    slideTimeRange = slideTimeRange + timePerSlide
    }
}

firstPartApresentation(startTime)
/*




/*
const talkTotal = eventTotal - breakTotal

// Time per slide
const timePerSlide = talkTotal / slideNum

// Break Time
const breakStart = (eventTotal - breakTotal) / 2
const breakEnd = breakStart + breakTotal

// First part
const firstPartRange = breakStart -  
*/