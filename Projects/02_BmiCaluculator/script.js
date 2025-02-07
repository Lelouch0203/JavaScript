const form = document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
 
    const results = document.querySelector("#results")

    if (height==0||height<0||isNaN(height)) {
        results.innerHTML=`Please give a valid height`
        
    }
    else if (weight==0||weight<0||isNaN(weight)) {
        results.innerHTML=`Please give a valid weight`
        
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
     
        if (bmi<18.6) {
            results.innerHTML=`Your BMI is ${bmi}. You are Under weight`
            
        }
        else if (bmi<24.9) {
            results.innerHTML=`Your BMI is ${bmi}. You are Normal range`
            
        }
        else if (bmi>24.9) {
            results.innerHTML=`Your BMI is ${bmi}. You are Over Weight`
            
        }
    }
})