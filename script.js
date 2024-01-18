// CONSTANTS
const CATEGORY_REACTION = "reaction";
const CATEGORY_MEMORY = "memory";
const CATEGORY_VERBAL = "verbal";
const CATEGORY_VISUAL = "visual";

// VARIABLES
let elementSummaryWrapper = null;
let templateScoreSummaryList = null;

$(document).ready(function(e){

    elementSummaryWrapper = $(`ul.score-summary`);
    templateScoreSummaryList = $("ul.score-summary").clone();

    renderSummryElement();
});

renderSummryElement = () => {
    
    let data = getData();
    

    if(data == undefined || data == null) return;
    
    elementSummaryWrapper.empty();

    data.forEach(item => {

        let template = templateScoreSummaryList;
        let styleType = null;

        //determining list style
        if (item["category"].toLowerCase() == CATEGORY_REACTION) {
            styleType = "danger";
        } else if (item["category"].toLowerCase() == CATEGORY_MEMORY) {
            styleType = "warning";
        } else if (item["category"].toLowerCase() == CATEGORY_VERBAL) {
            styleType = "success";
        } else if (item["category"].toLowerCase() == CATEGORY_VISUAL) {
            styleType = "primary";
        }


        // set icon title
        $(template).find(`.title img`).attr(`src`, `${item["icon"]}`);
        $(template).find(`.title img`).attr(`alt`, `Icon ${item["category"]}`);

        //set title text
        $(template).find(`.title span`).text(item["category"]);

        //set score
        $(template).find(`.score-summary-val`).text(item["score"]);

        elementSummaryWrapper.append(template.html());

        $(`ul.score-summary li:last-child`).addClass(styleType);

    });
}


getData = () => { 
    return [
        {
            "category": "Reaction",
            "score": 80,
            "icon": "./assets/images/icon-reaction.svg"
        },
        {
            "category": "Memory",
            "score": 92,
            "icon": "./assets/images/icon-memory.svg"
        },
        {
            "category": "Verbal",
            "score": 61,
            "icon": "./assets/images/icon-verbal.svg"
        },
        {
            "category": "Visual",
            "score": 72,
            "icon": "./assets/images/icon-visual.svg"
        }
    ];
}
