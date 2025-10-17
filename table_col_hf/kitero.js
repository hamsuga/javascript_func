
const szam = 6;

valami1() //hosting miatt tudjuk elobb megnyitni
/**
 * ez a fuggveny ki irja hogy valami
 * @returns {void}
 */
function valami1 () {
    console.log("valami")
}

valami2() //a global scopon levot is elerjuk
/**
 * ez a fuggveny a globalis valtozot irja ki
 * @returns {void}
 */
function valami2 () {
    console.log(szam)
}

valami3()
/**
 * ez a localis valtozot irja ki
 * @returns {void}
 */
function valami3 (){
    const b = 9;
    console.log(b)
}

const opsum = valami4(2)
console.log(opsum)
/**
 * 
 * @param {number} para1 - ez a bemeneti parameter
 * @returns {number}
 */
function valami4(para1) {
    const szam1 = 6;
    const szam2 = szam1+para1;
    return szam2;
}