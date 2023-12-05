import VIEW from "./VIEW";
import FictionalTimeline from "./FictionalTimeline";

export default class CONTROLLER {
    constructor() {
        this.TimelineCreation = {
            BTN: {},
            AREA: {},
            INPUT: {}
        };
        this.VIEW = new VIEW();

        this.eventCount = 0;

        this.loadHTML();
        this.DOMevents();
        this.printNewEventForm();
    }
    loadHTML() {
        //TIMELINE CREATION
        this.TimelineCreation.BTN.addEvent = document.querySelector('#addEventBTN');
        this.TimelineCreation.BTN.saveTimeline = document.querySelector('#saveTimelineBTN');
        this.TimelineCreation.BTN.generateTimeline = document.querySelector('#generateTimelineBTN');
        this.TimelineCreation.AREA.events = document.querySelector('#eventDataArea');
        this.TimelineCreation.INPUT.timelineCode = document.querySelector('#timelineCode');
        this.TimelineCreation.INPUT.timelineModCode = document.querySelector('#timelineModCode');
        this.TimelineCreation.INPUT.timelineName = document.querySelector('#timelineName');
        this.TimelineCreation.INPUT.timelineSubname = document.querySelector('#subname');
    }
    DOMevents() {
        this.TimelineCreation.BTN.addEvent.addEventListener('click', () => {
            this.printNewEventForm();
        });
        this.TimelineCreation.BTN.saveTimeline.addEventListener('click', () => {
            this.saveTimeline();
        });
        this.TimelineCreation.BTN.generateTimeline.addEventListener('click', () => {
            let code = this.TimelineCreation.INPUT.timelineModCode.value;
            this.TimelineCREATED = new FictionalTimeline(code);
            this.createFromClass();
        })
    }

    printNewEventForm() {
        let html = this.VIEW.TimelineCreation.printEventForm(this.eventCount);
        this.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);
        this.eventCount++;
    }

    saveTimeline() {
        this.TimelineCREATED = new FictionalTimeline();
        this.TimelineCREATED.name = this.TimelineCreation.INPUT.timelineName.value;
        this.TimelineCREATED.subname = this.TimelineCreation.INPUT.timelineSubname.value;

        let events = new Array(this.eventCount);
        for (let i = 0; i < this.eventCount; i++) {
            events[i] = {};
            events[i].name = document.querySelector('#name' + i).value;
            events[i].day = document.querySelector('#day' + i).value;
            events[i].month = document.querySelector('#month' + i).value;
            events[i].year = document.querySelector('#year' + i).value;
            events[i].hour = document.querySelector('#hour' + i).value;
            events[i].min = document.querySelector('#min' + i).value;
            events[i].desc = document.querySelector('#desc' + i).value;
        }

        this.TimelineCREATED.events = events;
        this.TimelineCreation.INPUT.timelineCode.value = this.TimelineCREATED.dataToString();
    }

    deleteEventsArea() {
        this.eventsArea.innerHTML = "";
    }
    createFromClass() {
        this.TimelineCreation.INPUT.timelineName.value = this.TimelineCREATED.name;
        this.TimelineCreation.INPUT.timelineSubname.value = this.TimelineCREATED.subname;
        this.eventCount = this.TimelineCREATED.events.length;
        this.TimelineCreation.AREA.events.innerHTML = "";
        this.TimelineCREATED.events.forEach((event, index) => {
            let html = this.VIEW.TimelineCreation.printSingleEvent(event, index);
            this.TimelineCreation.AREA.events.insertAdjacentHTML('beforeend', html);
        });
    }

}