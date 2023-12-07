import TimelineCreationTEMPLATE from "./ViewTemplates/TimelineCreationTEMPLATE";
import TimelineWatchTEMPLATE from "./ViewTemplates/TimelineWatchTEMPLATE";

export default class VIEW {
    constructor() {
        let HTML_template = {
            BTN: {},
            AREA: {},
            INPUT: {}
        }
        this.INFO = {};
        this.FOOTER = {};
        this.HTML = {
            TimelineCreation: HTML_template,
            TimelineWatch: HTML_template
        };
        this.TEMPLATE = {};
        this.TEMPLATE.TimelineCreation = new TimelineCreationTEMPLATE();
        this.TEMPLATE.TimelineWatch = new TimelineWatchTEMPLATE();
        this.loadHTML();

    }
    loadHTML() {
        //TIMELINE CREATION
        this.HTML.TimelineCreation.BTN.addEvent = document.querySelector('#addEventBTN');
        this.HTML.TimelineCreation.BTN.saveTimeline = document.querySelector('#saveTimelineBTN');
        this.HTML.TimelineCreation.BTN.generateTimelineCode = document.querySelector('#generateTimelineFromCodeBTN');
        this.HTML.TimelineCreation.AREA.events = document.querySelector('#eventDataArea');
        this.HTML.TimelineCreation.INPUT.timelineCode = document.querySelector('#timelineCode');
        this.HTML.TimelineCreation.INPUT.timelineModCode = document.querySelector('#timelineModCode');
        this.HTML.TimelineCreation.INPUT.timelineName = document.querySelector('#timelineName');
        this.HTML.TimelineCreation.INPUT.timelineSubname = document.querySelector('#subname');

        //TIMELINE WATCH
        this.HTML.TimelineWatch.BTN.addTimeline = document.querySelector('#addTimelineBTN');
        this.HTML.TimelineWatch.BTN.generateTimeline = document.querySelector('#generateTimelineBTN');
        this.HTML.TimelineWatch.AREA.timelineName = document.querySelector('#timelineNameArea');
        this.HTML.TimelineWatch.AREA.timelinesAllCodes = document.querySelector('#timelinesCodes');
        this.HTML.TimelineWatch.AREA.eventSection = document.querySelector('#eventsArea');

        //FOOTER
        this.FOOTER.yearSpan = document.querySelector('#yearSpan') ? document.querySelector('#yearSpan') : false;
        this.INFO.year = new Date().getFullYear();
        if (this.FOOTER.yearSpan) this.FOOTER.yearSpan.innerHTML = year;
    }

    printNewEventForm(eventCount) {
        if (this.HTML.TimelineCreation.AREA.events) {
            let html = this.TEMPLATE.TimelineCreation.getEventForm(eventCount);
            this.HTML.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);
            return ++eventCount;
        }
    }

    printTimelineCodeArea(timelinesCount) {
        if (this.HTML.TimelineWatch.AREA.eventSection) {
            let html = this.TEMPLATE.TimelineWatch.getTimelineCodeArea(timelinesCount);
            this.HTML.TimelineWatch.AREA.timelinesAllCodes.insertAdjacentHTML('beforeend', html);
            return ++timelinesCount;
        }
        return false;
    }

    clearWatchingArea(){
        this.HTML.TimelineWatch.AREA.eventSection.innerHTML = '';
    }

    printTimeline(timelineClass){
        let name = timelineClass.name;
        let nameHTML = this.TEMPLATE.TimelineWatch.getTimelineNameHTML(name);
        this.HTML.TimelineWatch.AREA.timelineName.innerHTML = nameHTML;
        let headersHTML = this.TEMPLATE.TimelineWatch.getTimelineHeadersHTML(timelineClass);
        this.HTML.TimelineWatch.AREA.eventSection.insertAdjacentHTML('beforeend', headersHTML);
        return true;
    }

    printEventsWatcher(event, timelinesCount){
        let html = this.TEMPLATE.TimelineWatch.getEventHTML(event, timelinesCount);
        this.HTML.TimelineWatch.AREA.eventSection.insertAdjacentHTML('beforeend', html);
        return true;
    }

    updateFromValues(name, subname, events) {
        this.HTML.TimelineCreation.INPUT.timelineName.value = name;
        this.HTML.TimelineCreation.INPUT.timelineSubname.value = subname;
        let eventCount = events.length;
        this.HTML.TimelineCreation.AREA.events.innerHTML = "";
        events.forEach((event, index) => {
            let html = this.TEMPLATE.TimelineCreation.printSingleEvent(event, index);
            this.HTML.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);
        });
        return eventCount;
    }

    getInput = (inputName) => {
        if (inputName == 'timelineCode') return this.HTML.TimelineCreation.INPUT.timelineCode ? this.HTML.TimelineCreation.INPUT.timelineCode.value : false;
        if (inputName == 'timelineModCode') return this.HTML.TimelineCreation.INPUT.timelineModCode ? this.HTML.TimelineCreation.INPUT.timelineModCode.value : false;
        if (inputName == 'timelineName') return this.HTML.TimelineCreation.INPUT.timelineName ? this.HTML.TimelineCreation.INPUT.timelineName.value : false;
        if (inputName == 'timelineSubname') return this.HTML.TimelineCreation.INPUT.timelineSubname ? this.HTML.TimelineCreation.INPUT.timelineSubname.value : false;
        return false;
    }
    updateInput = (inputName, value) => {
        if (inputName == 'timelineCode') return this.HTML.TimelineCreation.INPUT.timelineCode.value = value;
        if (inputName == 'timelineModCode') return this.HTML.TimelineCreation.INPUT.timelineModCode.value = value;
        if (inputName == 'timelineName') return this.HTML.TimelineCreation.INPUT.timelineName.value = value;
        if (inputName == 'timelineSubname') return this.HTML.TimelineCreation.INPUT.timelineSubname.value = value;
        return false;
    }

    checkBTN = (name) => {
        if (name == 'addEvent') return this.HTML.TimelineCreation.BTN.addEvent;
        if (name == 'saveTimeline') return this.HTML.TimelineCreation.BTN.saveTimeline;
        if (name == 'generateTimelineCode') return this.HTML.TimelineCreation.BTN.generateTimelineCode;
        if (name == 'addTimeline') return this.HTML.TimelineWatch.BTN.addTimeline;
        if (name == 'generateTimeline') return this.HTML.TimelineWatch.BTN.generateTimeline;
        return false;
    }

    checkPage = (name) => {
        if(name === 'create') return this.HTML.TimelineCreation.AREA.events ? true : false;
        if(name === 'watch') return this.HTML.TimelineWatch.AREA.timelinesAllCodes ? true : false;
    }

}