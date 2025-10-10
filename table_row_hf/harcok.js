/**
 * @type {{war:string,team1:string,team1Size:string,team2?:string,team2Size?:string}[]}
 */
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]
const table= document.createElement("table")
document.body.appendChild(table)

const thead =document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const t =["Harc megnevezése", "Szembenálló felek", "Haderő"]
for (let a of t)
{
    const th = document.createElement("th");
    tr.appendChild(th)
    th.innerText = a
}
const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (let b of arr) {
    const tr1 = document.createElement("tr")
    tbody.appendChild(tr1)
    const td = document.createElement("td")
    td.innerText = b.war
    tr1.appendChild(td)
    const td1 = document.createElement("td")
    td1.innerText= b.team1
    tr1.appendChild(td1)
    const td2 = document.createElement("td")
    td2.innerText=b.team1Size
    tr1.appendChild(td2)
    if (b.team2&&b.team2Size) {
        td.rowSpan=2
        const tr2= document.createElement("tr")
        tbody.appendChild(tr2)
        const td3 = document.createElement("td")
        td3.innerText=b.team2;
        tr2.appendChild(td3)
        const td4 = document.createElement("td")
        td4.innerText=b.team2Size;
        tr2.appendChild(td4)
    }
}