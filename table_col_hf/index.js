/**
 * @type {{theme:string,time:string,scientist1:string,scientist2?:string}[]}
 */
const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table= document.createElement("table");   // letre hoz egy html elemet a memoriaban 
document.body.appendChild(table);               //hozza fuz egy html elemet
const thead = document.createElement("th");
table.appendChild(thead);
const trow = document.createElement("tr");
thead.appendChild(trow);
const th1 =document.createElement("th");
trow.appendChild(th1);
th1.innerText="Fizika területe";

const th2 =document.createElement("th");
trow.appendChild(th2);
th2.innerText="Idoszak";

const th3 =document.createElement("th");
trow.appendChild(th3);
th3.innerText="Kepviselok";
th3.colSpan=2;

const tbody = document.createElement("tbody");
table.appendChild(tbody);

for(const c of arr) {
    const tr1 =document.createElement("tr")
    tbody.appendChild(tr1)
    const td1=document.createElement("td")
    tr1.appendChild(td1)
    const tr2=cocument.createElement("td")
    tr1.appendChild(tr2)
    const td3=document.createElement("td")
    tr1.appendChild(td3)
}
