let newButton = document.querySelector('.btn');

newButton.addEventListener("click", function() {
    let h2 = document.querySelector('h2');
    let ramdomColor = getRandomColor();
    h2.innerText = ramdomColor;

    let box = document.querySelector(".colorBox");
    box.style.backgroundColor = ramdomColor;

    

})


function getRandomColor()
{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let generatedColor = `rgb(${red} , ${green} , ${blue})`;
    return generatedColor
}