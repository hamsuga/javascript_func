/**
 * @typedef {{nemz:string,szerzo:string,mu:string,szerzo1?:string,mu1?:string}} CountryWriters
 */
/**
 * 
 * @param {HTMLFormElement} form 
 * @param {string} id 
 * @param {string} labelContent 
 */
function createFormElement(form,id,labelContent) {
    const label = document.createElement("label")
    form.appendChild(label)
    label.htmlFor = id
    label.innerText = labelContent

    const input = document.createElement("input")
    form.appendChild(input)
    input.id = id

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
}

/**
 * 
 * @param {*} tablebody 
 * @param {*} CountryWriters 
 */
function renderTableRow(tablebody,CountryWriters){
    const tr1 = document.createElement("tr")
    tablebody.appendChild(tr1)

    const td = document.createElement("td")
    td.innerText = CountryWriters.nemz
    
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

    createCellElement("td",CountryWriters.szerzo,tr1)
    /**const td1 = document.createElement("td")
    td1.innerText= CountryWriters.szerzo
    tr1.appendChild(td1)**/

    createCellElement("td",CountryWriters.mu,tr1)
    /**const td2 = document.createElement("td")
    td2.innerText = CountryWriters.mu
    tr1.appendChild(td2)**/

    if(CountryWriters.szerzo1 != undefined && CountryWriters.mu1 != undefined){

        const tr2 = document.createElement('tr')
        tablebody.appendChild(tr2)

        const td3 = document.createElement('td')
        td3.innerText = CountryWriters.szerzo1
        tr2.appendChild(td3)

        const td4 = document.createElement('td')
        td4.innerText = CountryWriters.mu1
        tr2.appendChild(td4)

        td.rowSpan = '2'
    }    
}

{"td"|"th"} function createCellElement(celltype,cellContent,parentrow) {
    const cela = document.createElement(celltype)
    cela.innerText=cellContent
    parentrow.appendChild(cela)
    return cela;
}
/**
 * 
 * @param {HTMLTableElement} table 
 * @param {string[]} headerlist 
 */
function generateheader(table,headerlist) {
    const head = document.createElement("thead")
    table.appendChild(head)
    const tr = document.createElement("tr")
    head.appendChild(tr)
    for (let a of headerlist) {
        createCellElement("th",a,tr)
    }
} 


/**
 * 
 * @param {Event} e 
 */
function htmlformEventListener(e) {
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
     * @type {{CountryWriters}}
     */
    const objektum = {}
    objektum.nemz = nemzetisegerteke;
    objektum.szerzo = szerzoerteke;
    objektum.mu = muerteke;
    objektum.szerzo1 = szerzo1erteke;
    objektum.mu1 = mu1erteke;


    const tabla =document.getElementById("tablebody")

    const tr = document.createElement("tr")
    table.appendChild(tr)

    createCellElement("td",nemzetisegerteke,tr)
    /**const td = document.createElement("td")
    td.innerText=nemzetisegerteke;
    tr.appendChild(td)**/

    createCellElement("td",szerzoerteke,tr)
    /**const td1 = document.createElement("td")
    td1.innerText=szerzo;
    tr.appendChild(td1)**/

    createCellElement("td",muerteke,tr)
    /**const td2 = document.createElement("td")
    td2.innerText=mu;
    tr.appendChild(td2)**/

    if(szerzo1erteke != "" && mu1erteke != ""){
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)

        createCellElement("td",szerzo1erteke,tr2)
        /**const td3 = document.createElement('td')
        td3.innerText = szerzo1erteke
        tr2.appendChild(td3)**/

        createCellElement("td",mu1erteke,tr2)
        /**const td4 = document.createElement('td')
        td4.innerText = mu1erteke
        tr2.appendChild(td4)**/

        td.rowSpan = '2'
    }
}
