export default class FictionalTimeline {
    name = null;
    subname = null;
    events = [];
    code = null;

    constructor(data = null) {
        if (data !== null) {
            let v = data.split(';');
            this.name = v[0];
            this.subname = v[1];
            let events = v[2].split('/');
            this.events = new Array(events.length);
            events.forEach((e, index) => {
                let eD = e.split('|');
                this.events[index] = {};
                this.events[index].day = parseInt(eD[0]);
                this.events[index].month = parseInt(eD[1]);
                this.events[index].year = parseInt(eD[2]);
                this.events[index].hour = parseInt(eD[3]);
                this.events[index].min = parseInt(eD[4]);
                this.events[index].name = eD[5];
                this.events[index].desc = eD[6];
            });
        }

    }

    getName = () => {
        return this.name;
    }

    dataToString = () => {
        let str = '';
        str = this.pyc(str, this.name);
        str = this.pyc(str, this.subname);
        str = this.sla(str, this.events, true);
        return str;
    }
    pyc(str, data) {
        return str += data + ';';
    }
    sla(str, data, final = false) {
        let result = '';
        let helper = false;
        data.forEach(event => {
            if (helper) result += '/';
            result += event.day + '|';
            result += event.month + '|';
            result += event.year + '|';
            result += event.hour + '|';
            result += event.min + '|';
            result += event.name + '|';
            result += event.desc;
            helper = true;
        })

        str += result;
        if (!final) str += ';'
        return str;
    }
}