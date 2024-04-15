import { series } from './data.js';
var seriesTable = document.getElementById("serie");
mostrarDatosSeries(series);
promedioTemporadas(series);
function mostrarDatosSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var index = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"background-color: #e9ecef;\">".concat(serie.num, "</td>\n        <td style=\"background-color: #e9ecef;\" style=\"color: blue;\">").concat(serie.name, "</td>\n        <td style=\"background-color: #e9ecef;\"> ").concat(serie.channel, "</td>\n        <td style=\"background-color: #e9ecef;\">").concat(serie.season, "</td>");
        seriesTbody.appendChild(trElement);
        index++;
    }
    seriesTable.appendChild(seriesTbody);
}
function promedioTemporadas(series) {
    var promedioTbody = document.createElement("tbody");
    var temporadas = 0;
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        var totalTemporadas = serie.season;
        temporadas += totalTemporadas;
        total++;
    }
    var promedio = temporadas / total;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td >Seasons Average:</td>\n    <td>".concat(promedio, "</td>");
    promedioTbody.appendChild(trElement);
    seriesTable.appendChild(promedioTbody);
}
