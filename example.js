

let stylerc  = new (require('./index.js')).base();


console.log(
    stylerc.style(
        'test red text',
        {
             'color':'red'
        }
    )
);

console.log(
    stylerc.style(
        'test text with blue background',
        {
             'background':'blue'
        }
    )
);

// simple effect
console.log(
    stylerc.style(
        'blinking  test text',
        {
             'effect':'blink'
        }
    )
);


//simple multiple style 
console.log(
    stylerc.style(
        'styled test text',
        {
             'color':'red',
             'background':'cyan',
             'effect':[
                'blink',
                'underline'
             ]
        }
    )
);



