//declaring variables and linking them to things within the HTML
let eating_outText = document.querySelector('#eating_out');
let barText = document.querySelector('#bar');
let randomText = document.querySelector('#random');
let car_gas_stationText = document.querySelector('#car_gas_station');
let groceriesText = document.querySelector('#groceries');
let funText = document.querySelector('#fun');
let venmoText = document.querySelector('#venmo');
let electricityText = document.querySelector('#electricity');
let gasText = document.querySelector('#gas');
let text = document.querySelector('#text');
let dropdown = document.querySelector('#dropdown');
let totalPersonalCostText = document.querySelector('#personal-cost');
let totalApptCostText = document.querySelector('#appt-cost');
let totalPersonalIncomeText = document.querySelector('#personal-income');
let totalApptIncomeText = document.querySelector('#appt-income');
let timberlaneText = document.querySelector('#timberlane');
let totalIncomeText = document.querySelector('#total-income');
let totalCostText = document.querySelector('#total-cost');
let netMoneyText = document.querySelector('#net-money');


//appt fixed expenses
let mortgage = 859.85;
let taxes = 0
let trash = 62.97;
let insurance = 100;
let wifi = 75;
let compost = 14;
let water = 58;
//appt fluctuating expenses
let electricity = 0;
let gas = 0;
//appt income
let apptIncome = 2300;

//personal fixed expenses
let gym = 12.69;
let carLoan = 452;
let roth = 200;
let disneyPlus = 7.10;

//personal fluctuating expenses
let eating_out = 0
let bar = 0;
let random = 0;
let car_gas_station = 0;
let groceries = 0;
let fun = 0;
let venmo = 0;
// personal income 
let timberlane = 3000;

//totals
let totalIncome;
let totalCost;
let netMoney;

//declaring variables for calculator box
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const submitButton = document.querySelector('#submit');
let inputBox = document.querySelector('#num');

//declaring arrays to be used to link the dropdown to where each value will be added/subtracted
const dropdownArray = [electricity, gas, eating_out, bar, random, car_gas_station, groceries, fun, venmo];
const dropdownTextArray = [electricityText, gasText, eating_outText, barText, randomText, car_gas_stationText, groceriesText, funText, venmoText];

//declaring what happends when each button is clicked
add.onclick = () => {changeNum(true);}; //when add button clicked, changeNum is true so it will add the input number to the dropbox destination
subtract.onclick = () => {changeNum(false);}; //when add button clicked, changeNum is false so it will subtract the input number to the dropbox destination
submitButton.onclick = submit; //submit fuction called when the submit button is clicked

function changeNum(adding) { 
    const targetInputValue = dropdown.value;        //selected dropbox value
    let inputNum = parseFloat(inputBox.value);       //input box number = inputNum
    if ((!isNaN(inputNum))) {                        //if inputNum is a number; addedValue is the value of dropdownArray at index of the targetInputValue
    let addedValue = dropdownArray[targetInputValue];
    let returnedValue;
    if (adding) {                                //if adding is true the returnedValue is the inputNum added to the addedValue
        returnedValue = addedValue + inputNum;
    } else {                                     //if adding is fale the returnedValue is the inputNum subtracted to the addedValue
        returnedValue = addedValue - inputNum;
    }
    dropdownTextArray[targetInputValue].innerText = "$" + returnedValue;  //if inputNum is a number; adds the returnedValue to the dropbox destination as a dollar value
    dropdownArray[targetInputValue] = returnedValue;                      //updates the new value for the dropdownArray at index of targetInputValue
    } else {
        alert('Please enter a valid number.');
    }

}

function submit(){         //submits the form for adding all the values to their respective locations for a summary 
    timberlaneText.innerText = "$" + timberlane;    
    totalApptIncomeText.innerText = "$" + apptIncome.toFixed(2); 
    let totalPersonalCost = gym + carLoan + disneyPlus + roth;
    totalPersonalCostText.innerText = totalPersonalCost;
    let totalPersonalIncome = timberlane;
    let totalApptCost = mortgage + taxes + insurance + trash + wifi + compost + water;
    for (let i = 0; i < dropdownArray.length; i++) {     
        let currentVariable = dropdownTextArray[i];
        let currentValue = dropdownArray[i];
        if (currentVariable === electricityText || currentVariable === gasText) {    //finding electricity and gas within dropdownArray and adding them to total appt cost
            totalApptCost += currentValue;
            let formattedtotalApptCost = totalApptCost.toFixed(2);
            totalApptCostText.innerText = "$" + formattedtotalApptCost;
        }
        else if (currentVariable === venmoText) {                 //finding vemno within dropdownArray and adding them to total personal income
            totalPersonalIncome += currentValue;
            let formattedTotalPersonalIncome = totalPersonalIncome.toFixed(2);
            totalPersonalIncomeText.innerText = "$" + formattedTotalPersonalIncome;
        } else {                                      //finds all other values within dropdownArray and adds them to the total personal cost
            totalPersonalCost += currentValue;
            let formattedTotalPersonalCost = totalPersonalCost.toFixed(2);
            totalPersonalCostText.innerText = "$" + formattedTotalPersonalCost;
        }
    }
    let formattedTotalCostText = totalApptCost + totalPersonalCost;
    totalCostText.innerText = "$" + formattedTotalCostText.toFixed(2);
    let formattedTotalIncomeText = totalPersonalIncome + apptIncome
    totalIncomeText.innerText = "$" + formattedTotalIncomeText.toFixed(2);
    netMoneyText.innerText = "$" + ((totalPersonalIncome + apptIncome) - (totalApptCost + totalPersonalCost));
}