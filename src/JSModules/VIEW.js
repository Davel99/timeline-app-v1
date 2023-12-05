import TimelineCreationTEMPLATE from "./ViewTemplates/TimelineCreationTEMPLATE";

export default class VIEW {
    constructor() {
        this.INFO = {};
        this.FOOTER = {};
        this.HTML = {
            TimelineCreation: {
                BTN: {},
                AREA: {},
                INPUT: {}
            }
        };
        this.TEMPLATE = {};
        this.TEMPLATE.TimelineCreation = new TimelineCreationTEMPLATE();
        this.loadHTML();

    }
    loadHTML() {
        //TIMELINE CREATION
        this.HTML.TimelineCreation.BTN.addEvent = document.querySelector('#addEventBTN');
        this.HTML.TimelineCreation.BTN.saveTimeline = document.querySelector('#saveTimelineBTN');
        this.HTML.TimelineCreation.BTN.generateTimeline = document.querySelector('#generateTimelineBTN');
        this.HTML.TimelineCreation.AREA.events = document.querySelector('#eventDataArea');
        this.HTML.TimelineCreation.INPUT.timelineCode = document.querySelector('#timelineCode');
        this.HTML.TimelineCreation.INPUT.timelineModCode = document.querySelector('#timelineModCode');
        this.HTML.TimelineCreation.INPUT.timelineName = document.querySelector('#timelineName');
        this.HTML.TimelineCreation.INPUT.timelineSubname = document.querySelector('#subname');

        //FOOTER
        this.FOOTER.yearSpan = document.querySelector('#yearSpan') ? document.querySelector('#yearSpan') : false;
        this.INFO.year = new Date().getFullYear();
        if(this.FOOTER.yearSpan) this.FOOTER.yearSpan.innerHTML = year;
    }

    printNewEventForm(eventCount) {
        let html = this.TEMPLATE.TimelineCreation.getEventForm(eventCount);
        this.HTML.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);
        return ++eventCount;
    }

    updateFromValues(name, subname, events) {
        this.HTML.TimelineCreation.INPUT.timelineName.value = this.TimelineCREATED.name;
        this.HTML.TimelineCreation.INPUT.timelineSubname.value = this.TimelineCREATED.subname;
        let eventCount = events.length;
        this.HTML.TimelineCreation.AREA.events.innerHTML = "";
        this.TimelineCREATED.events.forEach((event, index) => {
            let html = this.TEMPLATE.TimelineCreation.printSingleEvent(event, index);
            this.HTML.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);
        });
        return eventCount;
    }

    getInput = (inputName) => {
        if (inputName == 'timelineCode') return this.HTML.TimelineCreation.INPUT.timelineCode.value;
        if (inputName == 'timelineModCode') return this.HTML.TimelineCreation.INPUT.timelineModCode.value;
        if (inputName == 'timelineName') return this.HTML.TimelineCreation.INPUT.timelineName.value;
        if (inputName == 'timelineSubname') return this.HTML.TimelineCreation.INPUT.timelineSubname.value;
        return false;
    }
    updateInput = (inputName, value) => {
        if (inputName == 'timelineCode') return this.HTML.TimelineCreation.INPUT.timelineCode.value = value;
        if (inputName == 'timelineModCode') return this.HTML.TimelineCreation.INPUT.timelineModCode.value = value;
        if (inputName == 'timelineName') return this.HTML.TimelineCreation.INPUT.timelineName.value = value;
        if (inputName == 'timelineSubname') return this.HTML.TimelineCreation.INPUT.timelineSubname.value = value;
        return false;
    }
    
}