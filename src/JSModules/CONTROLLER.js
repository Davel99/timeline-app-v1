import VIEW from "./VIEW";
import FictionalTimeline from "./FictionalTimeline";

export default class CONTROLLER {
    constructor(V = new VIEW()) {
        this.VIEW = V;
        this.eventCount = 0;
        this.timelinesCount = 0;
        this.allEventsCount = 0;
        if (this.VIEW.checkPage('create')) this.eventCount = this.VIEW.printNewEventForm(this.eventCount);
        else if (this.VIEW.checkPage('watch')) this.timelinesCount = this.VIEW.printTimelineCodeArea(this.timelinesCount);
        this.DOMevents();

    }
    DOMevents() {
        //TIMELINE CREATION EVENTS
        if (this.VIEW.checkBTN('addEvent')) {
            this.VIEW.checkBTN('addEvent').addEventListener('click', () => {
                this.eventCount = this.VIEW.printNewEventForm(this.eventCount);
            });
        }
        if (this.VIEW.checkBTN('saveTimeline')) {
            this.VIEW.checkBTN('saveTimeline').addEventListener('click', () => {
                this.saveTimeline();
            });
        }
        if (this.VIEW.checkBTN('generateTimelineCode')) {
            this.VIEW.checkBTN('generateTimelineCode').addEventListener('click', () => {
                let code = this.VIEW.getInput('timelineModCode');
                if (!code) {
                    alert('Algo salió mal');
                } else {
                    this.TimelineCREATED = new FictionalTimeline(code);
                    console.log(this.TimelineCREATED);
                    let newCount = this.VIEW.updateFromValues(
                        this.TimelineCREATED.name,
                        this.TimelineCREATED.subname,
                        this.TimelineCREATED.events
                    );
                    this.eventCount = newCount;
                }
            });
        }
        //TIMELINE WATCH EVENTS
        if (this.VIEW.checkBTN('addTimeline')) {
            this.VIEW.checkBTN('addTimeline').addEventListener('click', () => {
                this.timelinesCount = this.VIEW.printTimelineCodeArea(this.timelinesCount);
            });
        }
        if (this.VIEW.checkBTN('generateTimeline')) {
            this.VIEW.checkBTN('generateTimeline').addEventListener('click', () => {
                this.handleWatch();
            })
        }
    }

    saveTimeline() {
        this.TimelineCREATED = new FictionalTimeline();
        this.TimelineCREATED.name = this.VIEW.getInput('timelineName');
        this.TimelineCREATED.subname = this.VIEW.getInput('timelineSubname');

        console.log('EVENTS COUNT' + this.eventCount);

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
        this.VIEW.updateInput('timelineCode', this.TimelineCREATED.dataToString());
    }

    handleWatch() {
        this.VIEW.clearWatchingArea();
        this.timelines = new Array(this.timelinesCount);
        this.allEventsCount = 0;
        for (let i = 0; i < this.timelinesCount; i++) {
            let fictionalTimeline = document.querySelector('#timeline' + i);
            let code = fictionalTimeline.value;
            this.timelines[i] = new FictionalTimeline(code);
            this.allEventsCount += this.timelines[i].events.length;
        }
        console.log("All events count: " + this.allEventsCount);

        this.allEvents = new Array(this.allEventsCount);
        let helper = 0;
        for (let i = 0; i < this.timelinesCount; i++) {
            for (let e = 0; e < this.timelines[i].events.length; e++) {
                this.allEvents[helper] = this.timelines[i].events[e];
                this.allEvents[helper].id = i;
                helper++;
            }
        }
        console.log(this.allEvents);
        this.orderEvents();
        this.VIEW.printTimeline(this.timelines);

        this.allEvents.forEach(event => {
            console.log(event);
            this.VIEW.printEventsWatcher(event, this.timelinesCount);
        })
    }

    orderEvents() {
        this.allEvents.sort((a, b) => this.sortEvent(a, b));
        console.log("Sorted events:");
        console.log(this.allEvents);
    }
    compare(a, b, attr) {
        if (a[attr] < b[attr])
            return -1;
        if (a[attr] > b[attr])
            return 1;
    }
    sortEvent(a, b) {
        if (a['year'] < b['year'])
            return -1;
        if (a['year'] > b['year'])
            return 1;

        if (a['month'] < b['month'])
            return -1;
        if (a['month'] > b['month'])
            return 1;

        if (a['day'] < b['day'])
            return -1;
        if (a['day'] > b['day'])
            return 1;

        if (a['hour'] < b['hour'])
            return -1;
        if (a['hour'] > b['hour'])
            return 1;

        if (a['min'] < b['min'])
            return -1;
        if (a['min'] > b['min'])
            return 1;
    }
}