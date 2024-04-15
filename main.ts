import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTable: HTMLElement = document.getElementById("serie")!;
mostrarDatosSeries(series);
promedioTemporadas(series);

function mostrarDatosSeries(series:Serie[]):void{
    let seriesTbody = document.createElement("tbody");
    let index:number=0;
    for(let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr")
        trElement.innerHTML = `<td style="background-color: #e9ecef;">${serie.num}</td>
        <td style="background-color: #e9ecef;" style="color: blue;">${serie.name}</td>
        <td style="background-color: #e9ecef;"> ${serie.channel}</td>
        <td style="background-color: #e9ecef;">${serie.season}</td>`
        seriesTbody.appendChild(trElement);
        index++;
    }
    seriesTable.appendChild(seriesTbody)
}

function promedioTemporadas(series:Serie[]):void{
    let promedioTbody = document.createElement("tbody");
    let temporadas:number=0;
    let total:number=0;
    for(let serie of series)
    {
        let totalTemporadas:number=serie.season;
        temporadas+=totalTemporadas;
        total++;
    }
    let promedio:number=temporadas/total;
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td >Seasons Average:</td>
    <td>${promedio}</td>`
    promedioTbody.appendChild(trElement);
    seriesTable.appendChild(promedioTbody);

}