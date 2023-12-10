export default class TimelineCreationTEMPLATE{
    constructor(){
        // this.eventCount = 0;
    }

    getEventForm(eventCount){
        return `
        <div class="border border-secondary rounded p-3" id="event${eventCount}">
            <div class="row justify-content-center mb-1">
                <div class="col-md-6">
                    <label class="form-label">Nombre del evento</label>
                    <input type="text" class="form-control" id="name${eventCount}"
                        placeholder="Ejemplo: Padres del protagonista son asesinados">
                </div>
                <div class="col-md-4 row">
                    <div class="col">
                        <label class="form-label">Día</label>
                        <input type="number" class="form-control input-number" id="day${eventCount}" placeholder="31">
                    </div>
                    <div class="col">
                        <label class="form-label">Mes</label>
                        <input type="number" class="form-control input-number" id="month${eventCount}" placeholder="12"
                            aria-label="Last name">
                    </div>
                    <div class="col">
                        <label class="form-label">Año</label>
                        <input type="number" class="form-control" id="year${eventCount}" placeholder="1999"
                            aria-label="Last name">
                    </div>
                </div>
                <div class="col-md-2 row">
                    <label class="form-label">Hora y min</label>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" id="hour${eventCount}" placeholder="23"
                            aria-label="Username">
                        <span class="input-group-text">:</span>
                        <input type="number" class="form-control" id="min${eventCount}" placeholder="59"
                            aria-label="Server">
                    </div>
                </div>
            </div>
            <div class="form-floating mx-3">
                <textarea class="form-control" placeholder="Descripción del evento"
                    id="desc${eventCount}"></textarea>
                <label for="desc">Descripción del evento</label>
            </div>
        </div>
        `;
    }

    printSingleEvent(event, counter){
    return `
        <div class="border border-secondary rounded p-3" id="event${counter}">
            <div class="row justify-content-center mb-1">
                <div class="col-md-6">
                    <label class="form-label">Nombre del evento</label>
                    <input type="text" class="form-control" id="name${counter}"
                        placeholder="Ejemplo: Padres del protagonista son asesinados" value="${event.name}">
                </div>
                <div class="col-md-4 row">
                    <div class="col">
                        <label class="form-label">Día</label>
                        <input type="text" class="form-control" id="day${counter}" placeholder="31" value="${event.day}">
                    </div>
                    <div class="col">
                        <label class="form-label">Mes</label>
                        <input type="text" class="form-control" id="month${counter}" placeholder="12" value="${event.month}">
                    </div>
                    <div class="col">
                        <label class="form-label">Año</label>
                        <input type="text" class="form-control" id="year${counter}" placeholder="1999" value="${event.year}">
                    </div>
                </div>
                <div class="col-md-2 row">
                    <label class="form-label">Hora y min</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="hour${counter}" placeholder="23" value="${event.hour}">
                        <span class="input-group-text">:</span>
                        <input type="text" class="form-control" id="min${counter}" placeholder="59" value="${event.min}">
                    </div>
                </div>
            </div>
            <div class="form-floating mx-3">
                <textarea class="form-control" placeholder="Descripción del evento"
                    id="desc${counter}">${event.desc}</textarea>
                <label for="desc">Descripción del evento</label>
            </div>
        </div>
        `;
    }
}