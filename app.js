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
    $('.palette button').click(function onPaletteClick(){
    
        const targetElement = $(this);

        $(targetElement).addClass('active').siblings().removeClass('active')

    
    })

}
function onGridClick(){
    let activeColor = $('.active').css('background-color');
    $(this).css('background-color',activeColor)
    
    
}


function onFillEmptyClick(){
    const elements = $('.grid .cell')

    let activeColor = $('.active').css('background-color');
    for (let index = 0; index < elements.length; index = index + 1) {
      let nextElement = $( elements[index] );
      console.log(nextElement.css('background-color'))
        if (nextElement.css('background-color') == 'rgba(0, 0, 0, 0)'){
            nextElement.css('background-color',activeColor)
        }

    }
}
function onFillAllClick(){
    let activeColor = $('.active').css('background-color');
    $('.grid .cell').css('background-color',activeColor)
}
function onClearCLick(){
        $('.grid .cell').css('background-color','rgba(0, 0, 0, 0)')
        console.log("hey")
}
makePalette()
makeGrid()
onPaletteClick()
$('.grid .cell').click(onGridClick)
$('.fill-all').click(onFillAllClick)
$('.fill-empty').click (onFillEmptyClick)
$('.clear').click(onClearCLick)
