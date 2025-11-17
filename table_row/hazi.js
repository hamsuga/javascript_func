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
renderTableBody(arr)


const valami3000 = document.getElementById("htmlform")
valami3000.addEventListener("submit", htmlformEventListener) //"function(e) - nameless function"

const form = document.createElement('form')
form.id = 'jsform'
document.body.appendChild(form)


createFormElement(form,"nemzetiseg","Nemzetiség:")
createFormElement(form,"szerzo1","Szerző:")
createFormElement(form,"mu1","Mű:")
createFormElement(form,"szerzo2","Másik Szerző:")
createFormElement(form,"mu2","Mű:")

/**
 * @type {{nemz:string,szerzo:string,mu:string,szerzo1?:string,mu1?:string}[]}
 */
const jsform = document.getElementById("jsform")
    jsform.addEventListener("submit", function(e) {
        e.preventDefault(); // meggatolja az alapertelmezet mukodest
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
     * @type {{CountryWriters}}
     */    
    const objektum1 = {}
    objektum1.nemz = nemzetisegerteke;
    objektum1.szerzo = szerzoerteke;
    objektum1.mu = muerteke;
    objektum1.szerzo1 = szerzo1erteke;
    objektum1.mu1 = mu1erteke;
    arr.push(objektum1)
    renderTablebody(arr)
    })

