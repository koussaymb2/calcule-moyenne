let form = document.querySelector('#myForm')

//analyse inputs
let examAnalyse = document.querySelector('#exam-analyse');
let dsAnalyse = document.querySelector('#ds-analyse');
let testAnalyse = document.querySelector('#test-analyse');

//algebre inputs
let examAlgebre = document.querySelector('#exam-algebre');
let dsAlgebre = document.querySelector('#ds-algebre');
let testAlgebre = document.querySelector('#test-algebre');

//algo inputs
let examAlgo = document.querySelector('#exam-algo');
let dsAlgo = document.querySelector('#ds-algo');
let testAlgo = document.querySelector('#test-algo');

//C inputs
let examC = document.querySelector('#exam-c');
let dsC = document.querySelector('#ds-c');
let testC = document.querySelector('#tp-c');

//python inputs
let examPython = document.querySelector('#exam-python');
let dsPython = document.querySelector('#ds-python');
let testPython = document.querySelector('#tp-python');

//exploi inputs
let examExploi = document.querySelector('#exam-exploi');
let dsExploi = document.querySelector('#ds-exploi');
let testExploi = document.querySelector('#tp-exploi');

//reseau inputs
let examReseau = document.querySelector('#exam-reseau');
let dsReseau = document.querySelector('#ds-reseau');
let testReseau = document.querySelector('#tp-reseau');

//base inputs
let examBase = document.querySelector('#exam-base');
let dsBase = document.querySelector('#ds-base');
let testBase = document.querySelector('#test-base');

//comm inputs
let examComm = document.querySelector('#exam-tech-de-comm');
let dsComm = document.querySelector('#ds-tech-de-comm');
let testComm = document.querySelector('#test-tech-de-comm');

//anglais inputs
let examAnglais = document.querySelector('#exam-anglais');
let dsAnglais = document.querySelector('#ds-anglais');
let testAnglais = document.querySelector('#test-anglais');

//c2i inputs
let examCulture = document.querySelector('#exam-culture');
let dsCulture = document.querySelector('#ds-culture');
let testCulture = document.querySelector('#test-culture');

//display moy
let displayMoy = document.querySelector('#moy')
form.addEventListener('submit',function(event) {
    event.preventDefault();
    calculer();
});
function calculer() {
    let moyAnalyse = (examAnalyse.value * 0.7 + dsAnalyse.value * 0.2 + testAnalyse.value * 0.1);
    let moyAlgebre = (examAlgebre.value * 0.7 + dsAlgebre.value * 0.2 + testAlgebre.value * 0.1);
    let moyAlgo = (examAlgo.value * 0.7 + dsAlgo.value * 0.2 + testAlgo.value * 0.1);
    let moyC = (examC.value * 0.7 + dsC.value * 0.2 + testC.value * 0.1);
    let moyPython = (examPython.value * 0.7 + dsPython.value * 0.2 + testPython.value * 0.1);
    let moyExploi = (examExploi.value * 0.7 + dsExploi.value * 0.2 + testExploi.value * 0.1);
    let moyReseau = (examReseau.value * 0.7 + dsReseau.value * 0.2 + testReseau.value * 0.1);
    let moyBase = (examBase.value * 0.7 + dsBase.value * 0.2 + testBase.value * 0.1);
    let moyComm = (examComm.value * 0.4 + dsComm.value * 0.4 + testComm.value * 0.2);
    let moyAnglais = (examAnglais.value * 0.4 + dsAnglais.value * 0.4 + testAnglais.value * 0.2);
    let moyCulture = (examCulture.value * 0.4 + dsCulture.value * 0.4 + testCulture.value * 0.2);
    
    let moyGenerale = (moyAnalyse * 1.5 + moyAlgebre * 1.5 + moyAlgo * 1.5 + moyC + moyPython + moyExploi * 1.5 + moyReseau * 2 + moyBase * 2 + moyAnglais + moyComm + moyCulture) / 15;
    console.log(moyGenerale)
    displayMoy.innerHTML = "votre moyenne est à peu près : " + moyGenerale.toFixed(2);
}