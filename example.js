

let stylerc  = new (require('./index.js')).base();


console.log(
    stylerc.style('test',{color:'red',background:'white',effect:'blink'})
);

