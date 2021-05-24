let calculate = document.querySelector('#calculate');

//create a function with the inputted values
calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    //validate
    if(totalBill == '' || tipPercent == 0 || split == 0){
        alert('Please enter values');
        return;
    }
	
    //calculate
    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);
    
	//display total
    document.getElementById('tip').innerHTML = total;


})
