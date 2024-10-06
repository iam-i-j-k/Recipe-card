document.getElementById('ingredients-btn').addEventListener('click', function() {
    const ingredients = document.getElementById('cake-ingredients');
    ingredients.classList.toggle('hidden');
});

document.getElementById('instructions-btn').addEventListener('click', function() {
    const steps = document.getElementById('cake-instructions');
    steps.classList.toggle('active');
});

let stepIndex = 0;
document.getElementById('cook-btn').addEventListener('click', function() {
    const insts = document.getElementById('cake-instructions');
    insts.classList.add('active');
    const steps = document.querySelectorAll('#cake-instructions li');
    if (stepIndex < steps.length) {
        document.getElementById('cook').innerHTML = "Next";
        steps[stepIndex].style.backgroundColor = "#FFCD2A";
        stepIndex++;
    }
    else{
        document.getElementById('cook-btn').innerHTML = "Ooooh I can smell it...";

    }
});
