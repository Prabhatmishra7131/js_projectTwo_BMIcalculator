const form = document.querySelector('form')
// Using it this way gives the value of height as soon as the page(script) gets loaded, but we don't want to collect empty value rather we want to hold the value just after the submission point
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.results')

    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight<0 || isNaN(weight))
        {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //Show results
        results.innerHTML=`<span>${bmi}</span>`;
    }
});