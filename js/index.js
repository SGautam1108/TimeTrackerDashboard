$(document).ready(() => {
    // Stats options click response
    const removeActiveOption = () => {
        options.removeClass("stats__option--active");
    };

    const updateActiveOption = (currOption) => {
        removeActiveOption();
        currOption.classList.add("stats__option--active");
    };

    const updateCard = (cardData, currTimeFrame, timeSpan) => {
        const cardTitle = cardData["title"];

        // get card corresponding to data title
        const currCard = '.tracker__cards[data-title="' + cardTitle + '"]';
        const cardCurrTime = $(`${currCard} .cards__curr-time`);
        const cardPrevTime = $(`${currCard} .cards__prev-time`);

        const currTimeData =
            cardData["timeframes"][`${currTimeFrame}`]["current"] + "hrs";
        const prevTimeData =
            cardData["timeframes"][`${currTimeFrame}`]["previous"] + "hrs";
        const prevTimePhrase = `Last ${timeSpan} - ${prevTimeData}`;


        if(firstAnimate){
            cardCurrTime.text(`${currTimeData}`);
            cardPrevTime.text(`${prevTimePhrase}`).fadeIn("slow");
        } else {
            cardCurrTime.fadeOut("slow", () => {
                cardCurrTime.text(`${currTimeData}`).fadeIn("slow");
            });
    
            cardPrevTime.fadeOut("slow", () => {
                cardPrevTime.text(`${prevTimePhrase}`).fadeIn("slow");
            });
        }
        
    };

    const changeStats = (e) => {
        const currTarget = e ? e.target : defaultOption;

        // get the timeframe for data, and timespan for prevtime
        updateActiveOption(currTarget);
        const currTimeFrame = currTarget.dataset.timeframe;
        const currTimeSpan = currTarget.dataset.time_span;

        data.then((json) => {
            // PromiseResult can only be accessed using then()
            json.forEach((obj) => {
                updateCard(obj, currTimeFrame, currTimeSpan);
            });

            if(firstAnimate) firstAnimate = false;
        });

    };

    // Clicking three dots changes Pseudo Before element image rotation
    const rotateImage = (e) => {
        const currCard = e.target.parentElement;
        currCard.classList.add("tracker__cards--rotate");
        setTimeout(() => {
            currCard.classList.remove("tracker__cards--rotate");
        }, 1000);
    };

    // Main code
    const defaultOption = $('.stats__option[data-time_span="Week"').get(0);
    const options = $(".stats__option");
    const trackerCards = $(".tracker__cards");
    const ellipsis = $(".cards__ellipsis");
    const data = fetch("./data.json").then((response) => response.json());

    let firstAnimate = true;

    changeStats();
    options.on("click", changeStats);
    ellipsis.on("click", rotateImage);
});

// Json, data attributes, using variables to change pseudo element
