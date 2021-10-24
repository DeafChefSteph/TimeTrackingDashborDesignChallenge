const dataDiv = document.querySelector('#data');
let stateVar = 'daily';

function createDiv(jsonId) {

    const div = document.createElement('div');

    div.classList.add('contentDiv');

    if (jsonId == 1) div.setAttribute('id', 'workDiv');
    else if (jsonId == 2) div.setAttribute('id', 'playDiv');
    else if (jsonId == 3) div.setAttribute('id', 'studyDiv');
    else if (jsonId == 4) div.setAttribute('id', 'exerciseDiv');
    else if (jsonId == 5) div.setAttribute('id', 'socialDiv');
    else if (jsonId == 6) div.setAttribute('id', 'selfCareDiv');
    
    dataDiv.appendChild(div);
    return div;
}

function createImg(jsonId, div) {

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('iconBackground');
    div.appendChild(imgDiv); 
    const img = document.createElement('img');
    img.classList.add('divImg');

    if (jsonId == 1) {
        img.src = './images/icon-work.svg';
        img.setAttribute('id', 'workImg');
        imgDiv.style.backgroundColor = 'hsl(15, 100%, 70%)'; 
    }
    else if (jsonId == 2) {
        img.src = './images/icon-play.svg';
        img.setAttribute('id', 'playImg');
        imgDiv.style.backgroundColor = 'hsl(195, 74%, 62%)'; 
    }
    else if (jsonId == 3) {
        img.src = './images/icon-study.svg';
        img.setAttribute('id', 'studyImg');
        imgDiv.style.backgroundColor = 'hsl(348, 100%, 68%)'; 
    }
    else if (jsonId == 4) {
        img.src = './images/icon-exercise.svg';
        img.setAttribute('id', 'exerciseImg');
        imgDiv.style.backgroundColor = 'hsl(145, 58%, 55%)'; 
    }
    else if (jsonId == 5) {
        img.src = './images/icon-social.svg';
        img.setAttribute('id', 'socialImg');
        imgDiv.style.backgroundColor = 'hsl(264, 64%, 52%)'; 
    }
    else if (jsonId == 6) {
        img.src = './images/icon-self-care.svg';
        img.setAttribute('id', 'selfCareImg');
        imgDiv.style.backgroundColor = 'hsl(43, 84%, 65%)'; 
    }
    imgDiv.appendChild(img);
}

function createStylingDiv(div) {
    const stylingDiv = document.createElement('div');
    stylingDiv.classList.add('stylingDiv');
    div.appendChild(stylingDiv);

    return stylingDiv; 
}

function createHeader(jsonId,json, div) {
    const divHeader = document.createElement('h3');
    divHeader.classList.add('divHeader');

    if (jsonId == 1) divHeader.textContent = json[0].title;
    else if (jsonId == 2) divHeader.textContent = json[1].title;
    else if (jsonId == 3) divHeader.textContent = json[2].title;
    else if (jsonId == 4) divHeader.textContent = json[3].title;
    else if (jsonId == 5) divHeader.textContent = json[4].title;
    else if (jsonId == 6) divHeader.textContent = json[5].title;

    div.appendChild(divHeader);
}

function createCircleIcon(div) {
    const circleIcon = document.createElement('img');
    circleIcon.classList.add('divCircleIcon');
    circleIcon.src = './images/icon-ellipsis.svg';  
    div.appendChild(circleIcon);
}

function createTimeDisplay(jsonId, state, json, div) {
    const time = document.createElement('p');
    time.classList.add('divTime');
    
    if (jsonId == 1) {
        if (state == 'daily')  time.textContent = json[0].timeframes.daily.current;
        else if (state == 'weekly') time.textContent = json[0].timeframes.weekly.current;
        else if (state == 'monthly') time.textContent = json[0].timeframes.monthly.current;
    }
    else if (jsonId == 2) {
         if (state == 'daily')  time.textContent = json[1].timeframes.daily.current;
        else if (state == 'weekly') time.textContent = json[1].timeframes.weekly.current;
        else if (state == 'monthly') time.textContent = json[1].timeframes.monthly.current;
    }
    else if (jsonId == 3) {
        if (state == 'daily')  time.textContent = json[2].timeframes.daily.current;
        else if (state == 'weekly') time.textContent = json[2].timeframes.weekly.current;
        else if (state == 'monthly') time.textContent = json[2].timeframes.monthly.current;
    }
    else if (jsonId == 4) {
        if (state == 'daily') time.textContent = json[3].timeframes.daily.current;
        else if (state == 'weekly') time.textContent = json[3].timeframes.weekly.current;
        else if (state == 'monthly') time.textContent = json[3].timeframes.monthly.current;
    }
    else if (jsonId == 5) {
        if (state == 'daily') time.textContent = json[4].timeframes.daily.current;
        else if (state == 'weekly') time.textContent = json[4].timeframes.weekly.current;
        else if (state == 'monthly') time.textContent = json[4].timeframes.monthly.current;
    }
    else if (jsonId == 6) {
        if (state == 'daily') time.textContent = json[5].timeframes.daily.current;
        else if (state == 'weekly') time.textContent = json[5].timeframes.weekly.current;
        else if (state == 'monthly') time.textContent = json[5].timeframes.monthly.current;
    }

    time.textContent = time.textContent + 'hrs';

    div.appendChild(time);
}

function createPreviousTimeDisplay(jsonId, state, json, div) {

    const previousTime = document.createElement('p');
    previousTime.classList.add('divPreviousTime');

    if (state == 'daily') previousTime.textContent = 'Today - ';
    else if (state == 'weekly') previousTime.textContent = 'Last Week - ';
    else if (state == 'monthly') previousTime.textContent = 'Last Month - ';

    if (jsonId == 1) {
        if (state == 'daily')  previousTime.textContent = previousTime.textContent + json[0].timeframes.daily.previous;
        else if (state == 'weekly') previousTime.textContent = previousTime.textContent + json[0].timeframes.weekly.previous;
        else if (state == 'monthly') previousTime.textContent = previousTime.textContent + json[0].timeframes.monthly.previous;
    }
    else if (jsonId == 2) {
         if (state == 'daily')  previousTime.textContent = previousTime.textContent + json[1].timeframes.daily.previous;
        else if (state == 'weekly') previousTime.textContent = previousTime.textContent + json[1].timeframes.weekly.previous;
        else if (state == 'monthly') previousTime.textContent = previousTime.textContent + json[1].timeframes.monthly.previous;
    }
    else if (jsonId == 3) {
        if (state == 'daily')  previousTime.textContent = previousTime.textContent + json[2].timeframes.daily.previous;
        else if (state == 'weekly') previousTime.textContent = previousTime.textContent + json[2].timeframes.weekly.previous;
        else if (state == 'monthly') previousTime.textContent = previousTime.textContent + json[2].timeframes.monthly.previous;
    }
    else if (jsonId == 4) {
        if (state == 'daily') previousTime.textContent = previousTime.textContent + json[3].timeframes.daily.previous;
        else if (state == 'weekly') previousTime.textContent = previousTime.textContent + json[3].timeframes.weekly.previous;
        else if (state == 'monthly') previousTime.textContent = previousTime.textContent + json[3].timeframes.monthly.previous;
    }
    else if (jsonId == 5) {
        if (state == 'daily') previousTime.textContent = previousTime.textContent + json[4].timeframes.daily.previous;
        else if (state == 'weekly') previousTime.textContent = previousTime.textContent + json[4].timeframes.weekly.previous;
        else if (state == 'monthly') previousTime.textContent = previousTime.textContent + json[4].timeframes.monthly.previous;
    }
    else if (jsonId == 6) {
        if (state == 'daily') previousTime.textContent = previousTime.textContent + json[5].timeframes.daily.previous;
        else if (state == 'weekly') previousTime.textContent = previousTime.textContent + json[5].timeframes.weekly.previous;
        else if (state == 'monthly') previousTime.textContent = previousTime.textContent + json[5].timeframes.monthly.previous;
    }
    previousTime.textContent = previousTime.textContent + 'hrs'
    div.appendChild(previousTime);
}

function createLowerDiv(div) {
    const lowerDiv = document.createElement('div');
    lowerDiv.classList.add('lowerDiv');
    div.appendChild(lowerDiv);
    
    return lowerDiv; 
}

function displayData(json) {
    let div = new Array(6);
        for (let i = 1; i < 7; i++){
            div[i - 1] = createDiv(i);
            createImg(i, div[i - 1]);
            const lowerDiv = createLowerDiv(div[i - 1]); 
            const tempDiv = createStylingDiv(lowerDiv);
            
            createHeader (i, json,  tempDiv);
            createCircleIcon (tempDiv); 
            createTimeDisplay(i, stateVar, json, lowerDiv);
            createPreviousTimeDisplay(i, stateVar, json, lowerDiv);
        }
}

function clearDataOnScreen() {
    dataDiv.textContent = '';
}



fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const jsonData = new Object(data);
        console.log(jsonData);

        displayData(jsonData);

        const dailyButton = document.querySelector('#dailyButton');
        const weeklyButton = document.querySelector('#weeklyButton');
        const monthlyButton = document.querySelector('#monthlyButton');

        dailyButton.style.color = 'hsl(235, 45%, 61%)';

        dailyButton.addEventListener('click', () => {
            clearDataOnScreen();
            stateVar = 'daily'; 
            displayData(jsonData);

            dailyButton.style.color = 'hsl(235, 45%, 61%)';
            weeklyButton.style.color = 'hsl(236, 100%, 87%)';
            monthlyButton.style.color = 'hsl(236, 100%, 87%)';
        });

        weeklyButton.addEventListener('click', () => {
            clearDataOnScreen();
            stateVar = 'weekly'; 
            displayData(jsonData);

            dailyButton.style.color = 'hsl(236, 100%, 87%)';
            weeklyButton.style.color = 'hsl(235, 45%, 61%)';
            monthlyButton.style.color = 'hsl(236, 100%, 87%)';
        });

        monthlyButton.addEventListener('click', () => {
            clearDataOnScreen();
            stateVar = 'monthly'; 
            displayData(jsonData);

            dailyButton.style.color = 'hsl(236, 100%, 87%)';
            weeklyButton.style.color = 'hsl(236, 100%, 87%)';
            monthlyButton.style.color = 'hsl(235, 45%, 61%)';
        });

        
            
          


        
         
        

        



    });
