/**
 * @type {{nemz:string,szerzo:string,mu:string,szerzo1?:string,mu1?:string}[]}
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

const t =["Nemzetiség", "Szerző", "Mű"]
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
    td.innerText = b.nemz
    
    td.addEventListener("click",function(e){ //az elso parameter egy string es a masodik pedig egy fugveny (callback) aminek a parametere az e
        /**
         * @type {HTMLTableCellElement} 
        */
        const valami = e.target //elkerjuk a tulajdonsagat es elrakja a valtozoba
        valami.classList.add("marked") //css osztalybol(nem csak cssbol ) a marked osztalyt hozza adjuk igy lesz a szin teal

        const valami1 = valami.parentElement
        const tbody = valami1.parentElement

        const el = tbody.querySelector(".marked"); // vissza adja az elso elemet ami megegyezik a css selectorral ha nem talal akkor null lesz
        
        if (el !== null) {
            valami.classList.remove("marked") //torolunk
        }
            valami.classList.add("marked") //hozza addunk   
    })
    tr1.appendChild(td)

    const td1 = document.createElement("td")
    td1.innerText= b.szerzo
    tr1.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText=b.mu
    tr1.appendChild(td2)

    if(b.szerzo1 != undefined && b.mu1 != undefined){

        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)

        const td3 = document.createElement('td')
        td3.innerText = b.szerzo1
        tr2.appendChild(td3)

        const td4 = document.createElement('td')
        td4.innerText = b.mu1
        tr2.appendChild(td4)

        td.rowSpan = '2'
    }
}

const valami3000 = document.getElementById("htmlform")
valami3000.addEventListener("submit", function(e) {
    /**
         * @type {HTMLFormElement} 
    */
    e =  preventDefault()
    const mehmehmeh = e.target 

    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = mehmehmeh.querySelector("#nemzetiseg")
    /**
     * @type {string}
     */
    const nemzetisegerteke = nemzetiseg.value

    /**
     * @type {HTMLInputElement}
     */
    const szerzo = mehmehmeh.querySelector("#szerzo1")
    /**
     * @type {string}
     */
    const szerzoerteke = szerzo.value
    /**
     * @type {HTMLInputElement}
     */
    const mu = mehmehmeh.querySelector("#mu1")
        /**
     * @type {string}
     */
    const muerteke = mu.value

    /**
     * @type {HTMLInputElement}
     */
    const szerzo1 = mehmehmeh.querySelector("#szerzo2")
        /**
     * @type {string}
     */
    const szerzo1erteke = szerzo1.value

    /**
     * @type {HTMLInputElement}
     */
    const mu1= mehmehmeh.querySelector("#mu2")
        /**
     * @type {string}
     */
    const mu1erteke = mu1.value


    /**
     * @type {nemz:string,szerzo:string,mu:string,szerzo1?:string,mu1?:string}
     */
    const objektum = {}
    objektum.nemz = nemzetisegerteke;
    objektum.szerzo = szerzogerteke;
    objektum.mu = muerteke;
    objektum.szerzo1 = szerzo1egerteke;
    objektum.mu1 = mu1erteke;


    const tabla =document.getElementById("tablebody")

    const tr = document.createElement("tr")
    table.appendChild(tr)

    const td = document.createElement("td")
    td.innerText=nemzetisegerteke;
    tr.appendChild(td)

    const td1 = document.createElement("td")
    td1.innerText=szerzo;
    tr.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText=mu;
    tr.appendChild(td2)

    if(szerzo1erteke != "" && mu1erteke != ""){
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)

        const td3 = document.createElement('td')
        td3.innerText = szerzo1erteke
        tr2.appendChild(td3)

        const td4 = document.createElement('td')
        td4.innerText = mu1erteke
        tr2.appendChild(td4)

        td.rowSpan = '2'
    }
})