/**
 * @type {}
 */
const array = [
{
    nev: "Balassi Bálint",
    kor: "reformáció",
    szerelme: "Losonczy Anna",
    szerelme2: "Dobó Krisztina",
},
{
    nev: "Csokonai Vitéz Mihály",
    kor: "felvilágosodás",
    szerelme: "Vajda Julianna",
},
{
    nev: "Petőfi Sándor",
    kor: "magyar romantika",
    szerelme: "Mednyánszky Berta",
    szerelme2: "Szendrey Júlia",
},
{
    nev: "Ady Endre",
    kor: "20 század",
    szerelme: "Léda",
    szerelme2: "Csinszka",
}
]
const table = document.createElement("table")
document.body.appendChild(table)
const thead = document.createElement("thead")
table.appendChild(thead)
const tbody = document.createElement("tbody")
table.appendChild(tbody)
const trhead = document.createElement("tr")
thead.appendChild(trhead)
/*const th1 = document.createElement("th")
th1.innerText = "Név"
trhead.appendChild(th1)
const th2 = document.createElement("th")
th2.innerText = "Kor"
trhead.appendChild(th2)
const th3 = document.createElement("th")
th3.innerText = "Szerelme"
th3.colSpan = 2
trhead.appendChild(th3)*/
createCellElement("th","Név",trhead)
createCellElement("th","Kor",trhead)
let a =createCellElement("th","Szerelme",trhead)
a.colSpan=2

for (const valami of array) {
    const trbody = document.createElement("tr")
    tbody.appendChild(trbody)
    /*const td1 = document.createElement("td")
    td1.innerText = valami.nev
    trbody.appendChild(td1)*/
    createCellElement("td",valami.nev,trbody)
    /*const td2 = document.createElement("td")
    td2.innerText = valami.kor
    trbody.appendChild(td2)*/
    createCellElement("td",valami.kor,trbody)
    /*const td3 = document.createElement("td")
    td3.innerText = valami.szerelme
    trbody.appendChild(td3)*/
    let c =createCellElement("td",valami.szerelme,trbody)
    if (valami.szerelme2 != null) {
        /*const td4 = document.createElement("td")
        td4.innerText = valami.szerelme2 
        trbody.appendChild(td4)*/
        createCellElement("td",valami.szerelme2,trbody)
    }
    else {
        //td3.colSpan = 2
        c.colSpan=2
    }
}
/**
 * letrehozz egy table elemet amit hozza add egy sor hoz
 * @param {string} celltype - td,th legyen
 * @param {string} cellcontent - mi legyen benne
 * @param {HTMLTableRowElement} cellrow -sor hoz kapcsoljuk hozza
 * @returns {HTMLTableCellElement} - vissza adja a celat
 */
function createCellElement(celltype,cellcontent,cellrow) {
    const cela = document.createElement(celltype)
    cela.innerText=cellcontent
    cellrow.appendChild(cela)
    return cela;
}
