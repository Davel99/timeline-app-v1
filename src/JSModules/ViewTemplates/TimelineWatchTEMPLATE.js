export default class TimelineWatchTEMPLATE{
    constructor() {
    }

    handleCreation(timelinesCount) {
        let timelines = new Array(timelinesCount);
        let allEventsCount = 0;
        for (let i = 0; i < timelinesCount; i++) {
            let fictionalTimeline = document.querySelector('#timeline' + i);
            let code = fictionalTimeline.value;
            timelines[i] = new FictionalTimeline(code);
            allEventsCount += this.timelines[i].events.length;
        }

        console.log("All events count: " + allEventsCount);

        let allEvents = new Array(this.allEventsCount);
        let helper = 0;
        for (let i = 0; i < timelinesCount; i++) {
            for (let e = 0; e < this.timelines[i].events.length; e++) {
                allEvents[helper] = timelines[i].events[e];
                allEvents[helper].id = i;
                helper++;
            }
        }
        console.log(allEvents);
        this.orderEvents();
        this.printTimelineName();
        this.printTimelineHeaders();

        this.allEvents.forEach(event => {
            console.log(event);
            this.printEvents(event);
        })
    }

    
    // handleCreation(timelinesCount, allEventsCount) {
    //     this.timelines = new Array(this.timelinesCount);
    //     this.allEventsCount = 0;
    //     for (let i = 0; i < this.timelinesCount; i++) {
    //         let fictionalTimeline = document.querySelector('#timeline' + i);
    //         let code = fictionalTimeline.value;
    //         this.timelines[i] = new FictionalTimeline(code);
    //         this.allEventsCount += this.timelines[i].events.length;
    //     }

    //     console.log("All events count: " + this.allEventsCount);

    //     this.allEvents = new Array(this.allEventsCount);
    //     let helper = 0;
    //     for (let i = 0; i < this.timelinesCount; i++) {
    //         for (let e = 0; e < this.timelines[i].events.length; e++) {
    //             this.allEvents[helper] = this.timelines[i].events[e];
    //             this.allEvents[helper].id = i;
    //             helper++;
    //         }
    //     }
    //     console.log(this.allEvents);
    //     this.orderEvents();
    //     this.printTimelineName();
    //     this.printTimelineHeaders();

    //     this.allEvents.forEach(event => {
    //         console.log(event);
    //         this.printEvents(event);
    //     })
    // }

    getTimelineCodeArea(timelinesCount) {
        return `
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="timeline${timelinesCount}" placeholder="Tu código">
            <label for="timeline${timelinesCount}">Código de tu línea de tiempo:</label>
        </div>
        `;
    }

    printTimelineName() {
        let html = `
            <span class="h4 font-monospace text-decoration-underline">${this.timelines[0].name}</span>
        `;
        this.timelineNameArea.innerHTML = html;
    }

    printTimelineHeaders() {
        // let headers = new Array(this.timelinesCount);
        let headers = '';
        for (let i = 0; i < this.timelinesCount; i++) {
            headers += `
            <div class="col-sm-10 col-md-8 col-lg-4">
                <span class="fw-semibold">Línea de</span>
                <br>
                <span class="h4 fw-bold text-uppercase">
                    ${this.timelines[i].subname}
                </span>
            </div>
            `;
        }
        let html = `
            <div class="row flex-nowrap border-bottom border-secondary my-3 py-3">
                ${headers}        
            </div>
        `;

        this.eventsArea.insertAdjacentHTML('beforeend', html);
    }

    printEvents(event) {
        let eventCols = '';
        for (let i = 0; i < this.timelinesCount; i++) {
            eventCols += `
            <div class="col-sm-10 col-md-8 col-lg-4">
            `;

            if(event.id === i){
                eventCols += `
                <section class="pt-2 border border-5 border-white rounded">
                    <div class="mb-0">
                        <span class="fw-light font-monospace text-decoration-underline">
                            <span title="Día">${event.day}</span>
                            /
                            <span title="Ciclo">${event.month}</span>
                            /
                            <span title="Año">${event.year}</span>
                        </span>
                    </div>
                    <div class="border-bottom border-secondary">
                        <small class="fw-light font-monospace">${event.hour}:${event.min}</small>
                    </div>
                    <div class="border-bottom border-secondary p-3">
                        <span class="h6 fw-semibold">
                            ${event.name}
                        </span>
                    </div>
                    <div class="px-3 py-2">
                        <small class="text-secondary">
                            ${event.desc}
                        </small>
                    </div>
                </section>
                `;
            }
                
            eventCols += `
                </div>
            `;
        }
        let html = `
            <div class="row flex-nowrap pt-3">
                ${eventCols}        
            </div>
        `;

        this.eventsArea.insertAdjacentHTML('beforeend', html);

    }

    orderEvents() {
        // this.allEvents.sort((a, b) => this.compare(a, b, 'year'));
        // this.allEvents.sort((a, b) => this.compare(a, b, 'month'));
        // this.allEvents.sort((a, b) => this.compare(a, b, 'day'));
        // this.allEvents.sort((a, b) => this.compare(a, b, 'hour'));
        // this.allEvents.sort((a, b) => this.compare(a, b, 'min'));
        // this.allEvents = this.allEvents.sort((a, b) => this.compare(a, b, 'year'));
        // this.allEvents = this.allEvents.sort((a, b) => this.compare(a, b, 'month'));
        // this.allEvents = this.allEvents.sort((a, b) => this.compare(a, b, 'day'));
        // this.allEvents = this.allEvents.sort((a, b) => this.compare(a, b, 'hour'));
        // this.allEvents = this.allEvents.sort((a, b) => this.compare(a, b, 'min'));
        this.allEvents.sort((a,b) => this.sortEvent(a,b));
        console.log("Sorted events:");
        console.log(this.allEvents);
    }

    compare(a, b, attr) {
        if (a[attr] < b[attr])
            return -1;
        if (a[attr] > b[attr])
            return 1;
    }

    sortEvent(a,b){
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