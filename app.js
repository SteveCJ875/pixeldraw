const palette = [
    'red',
    'blue',
    'aqua',
    'white',
    'gold',
    'black',
    'brown',
    'orange',
]







function makePalette(){
    for(let something=0;something <palette.length; something++){
    let color=palette[something]
    let button=$('<button>').css('background-color', color)
    $('.palette').append(button)
    $('.palette button').first().addClass('active');
}}
function makeGrid(){
    for(let index=0;index < 64; index++){
    let cell=$('<div class="cell">')
    $(".grid").append(cell)}
}
function onPaletteClick(){
    $('.active').removeClass()
    $('.palette button').click(function onPaletteClick(){
        const targetElement = $(this);

        $(targetElement).addClass('active').siblings().removeClass('active')

        $('.palette button').click(onPaletteClick);
    })

}
function onGridClick(){
    let activeColor = $('.active').css('background-color');
    $(this).css('background-color',activeColor)
    
    
}


function onFillEmptyClick(){
    const elements = $('.grid')

    for (let index = 0; index < palette.length; index = index + 1) {
      let nextElement = $( elements[index] );
   
      let activeColor = $('.active').css('background-color');
      $(nextElement).css('background-color',activeColor)
    }
}
function onFillAllClick(){
    let activeColor = $('.active').css('background-color');
    $('.grid .cell').css('background-color',activeColor)
}
function onClearCLick(){
        $('.grid .cell').css('background-color','');

        console.log("hey")
}
makePalette()
makeGrid()
onPaletteClick()
$('.grid .cell').click(onGridClick)
$('.fill-all').click(onFillAllClick)
$('.fill-empty').click (onFillEmptyClick)
$('.clear').click(onClearCLick)
