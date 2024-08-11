const slider = document.querySelector('.form-slider');
const output = document.querySelector('#slider_value');

output.innerHTML = slider.value;

slider.oninput  = function() {
    output.innerHTML = this.value;
};

slider.addEventListener("mousemove", function(){
    const maxValue = slider.getAttribute('max');
    const value = slider.value * 100 / maxValue;
    const color = 'linear-gradient(90deg, #BE69D5 ' + value + '%, #BAF1FF ' + value + '%)';
    slider.style.background = color;
});
