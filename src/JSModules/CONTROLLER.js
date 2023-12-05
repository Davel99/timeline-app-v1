import VIEW from "./VIEW";
import FictionalTimeline from "./FictionalTimeline";

export default class CONTROLLER {
    constructor(V = new VIEW()) {
        this.TimelineCreation = {
            BTN: {},
            AREA: {},
            INPUT: {}
        };
        this.VIEW = V;
        this.eventCount = 0;
        this.eventCount = this.VIEW.printNewEventForm(this.eventCount);

        this.DOMevents();
        
    }
    DOMevents() {
        this.VIEW.HTML.TimelineCreation.BTN.addEvent.addEventListener('click', () => {
            this.eventCount = this.VIEW.printNewEventForm(this.eventCount); 
        });
        this.VIEW.HTML.TimelineCreation.BTN.saveTimeline.addEventListener('click', () => {
            this.saveTimeline();
        });

        this.VIEW.HTML.TimelineCreation.BTN.generateTimeline.addEventListener('click', () => {
            let code = this.VIEW.getInput('timelineModCode');
            if (!code) {
                alert('Algo salió mal');
            } else {
                this.TimelineCREATED = new FictionalTimeline(code);
                let newCount = this.VIEW.updateFromValues(
                    this.TimelineCREATED.name,
                    this.TimelineCREATED.subname,
                    this.TimelineCREATED.events
                );
                this.eventCount = newCount;
            }
        });
    }

    saveTimeline() {
        this.TimelineCREATED = new FictionalTimeline();
        this.TimelineCREATED.name = this.VIEW.getInput('timelineName');
        this.TimelineCREATED.subname = this.VIEW.getInput('timelineSubname');

        console.log('EVENTS COUNT'+ this.eventCount);

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
        this.VIEW.updateInput('timelineCode',  this.TimelineCREATED.dataToString());
    }
}