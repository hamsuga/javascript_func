/**
 * @typedef {{nemz:string,szerzo:string,mu:string,szerzo1?:string,mu1?:string}} CountryWriters
 */
/**
 * @type {{CountryWriters}[]}
 */
const arr = [
    {
        nemz:"Orosz",
        szerzo:"Gogol",
        mu:"A köpönyeg",
        szerzo1:"Csehov",
        mu1:"A csinovnyik halála",
    },
    {
        nemz:"Cseh",
        szerzo:"Franz Kafka",
        mu:"Az átváltozás",
    },
    {
        nemz:"Magyar",
        szerzo:"Örkény István",
        mu:"Egyperces Novellák",
        szerzo1:"József Attila",
        mu1:"Klárisok",
    },
    {
        nemz:"Svájc",
        szerzo:"Friedrich Dürrenmatt",
        mu:"A fizikusok",
    }
]
const table= document.createElement("table")
document.body.appendChild(table)

const thead =document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const headerlist =["Nemzetiség", "Szerző", "Mű"]
generateheader(table,headerlist)
/**for (let a of headerlist)
{
    const th = document.createElement("th");
    tr.appendChild(th)
    th.innerText = a
}**/
const tbody = document.createElement("tbody")
tbody.id = "valami"
table.appendChild(tbody)
/**
 * @type {{nemz:string,szerzo:string,mu:string,szerzo1?:string,mu1?:string}[]}
 */
function renderTableBody(arr){
    const tbodyfunction = document.getElementById("valami")
    tbody.innerHTML = "";
    for (let b of arr) {
        renderTableRow(tbodyfunction,b)
    }
}
renderTableBody(arr)

const valami3000 = document.getElementById("htmlform")
valami3000.addEventListener("submit", htmlformEventListener) //"function(e) - nameless function"

const form = document.createElement("jsform")
form.id = "jsform"
document.body.appendChild(form)
/**
 * @param {HTMLFormElement}
 * @param {string}
 * @param {string}
 */

createFormElement(form,"nemzetiseg","Nemzetiség:")
createFormElement(form,"szerzo1","Szerző:")
createFormElement(form,"mu1","Mű:")
createFormElement(form,"szerzo2","Másik Szerző:")
createFormElement(form,"mu2","Mű:")

