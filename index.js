/*
 *  @Soldy\consolestylerc\2021.02.04\GPL3
 */
'use strict';

/*
 * @param {integer} limitIn //maximum size of package
 * @prototype
 */
const consoleStyleBase = function(){
    /*
     * @param {string} text
     * @param {object} styles
     * @public
     * @return {string}
     */
    this.style =  function (text, styles) {
        let styled = _style.toString();
        for (let i in styles)
            for (let s in styles[i])
                styled += _styler(s, styles[i][s]);
        for (let s in styles)
            styled += _styler(s, styles[s]);
        let last = text.lastIndexOf("\u001b[0m");
        text = (
            text.slice(0, last)+
            text.slice(last).replace("\u001b[0m", "\u001b[0m"+styled+"m")
        );
        return styled+"m"+text+"\u001b[0m";
    }
    /*
     * @param {string} text
     * @public
     * @return {string}
     */
    this.remove = function (text){
        return _remove(text);
    }
    /*
     * @param {string} type
     * @param {string} style
     * @private
     * @return {string}
     */
    const _styler = function(type,value){
        if (typeof _map[type] === 'undefined')
             return '';
        if (type === 'effect')
             return effect (value);
        if (typeof _map[type][value] !== "undefined")
            return ";"+_map[type][value].toString();
        if(type  === "color"){
            let color = _colorCheck(value);
            if (color !== false)
                return color;
         }else if(type  === "background"){
            let background = _backgroundCheck(value);
            if (background !== false)
                return background;
        }
        return "";
    }
    /*
    * @param {string||array} effects 
    * @private
    * @return string || false
    */
    const effect = function (effects){
        let out = '';
        if (Array.isArray(effects)){
            for(let i of effects)
                 if(typeof _map.effect[i] !== "undefined")
                     out += ';'+_map.effect[i].toString();
        }else{
            if(typeof _map.effect[effects] !== "undefined")
                out += ';'+_map.effect[effects].toString();
        }
        return out;
    }
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const _colorCheck = function (color){
        if(typeof color === "undefined")
            return false;
        if(parseInt(color).toString() === color.toString())
            return ";38;5;"+color;
        if(typeof _map.color[color] !== 'undefined')
            return ";48:2:"+_map.color[color]+":104 ";
        return ";48:2:"+color;
    }
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const _backgroundCheck = function (color){
        if(typeof color === "undefined")
            return false;
        if(parseInt(color).toString() === color.toString())
            return ";48;5;"+color;
        if(typeof _map.background[color] !== 'undefined')
            return ";48:2:"+_map.background[color]+":104";
        return ";48:2:"+color;
    }
    /*
     * @param {integer} red
     * @param {integer} green
     * @param {integer} blue
     * @private
     * @return {string}
     */
    const _trueColor = function (red, green, blue){
        return (";38;"+red+";"+green+";"+blue+";0m");
    }
    /*
     * @param {integer} red
     * @param {integer} green
     * @param {integer} blue
     * @private
     * @return {string}
     */
    const _trueBackground = function (red,green,blue){
        return (";48;2;"+red+";"+green+";"+blue+";0m");
    }
    /*
     * @private
     * @var {string}
     */
    const _style = "\u001b[85";
    /*
     * @private
     * @var {object}
     */
    const _map={
        color: {
             black: 30,
             red: 31,
             green: 32,
             yellow: 33,
             blue: 34,
             magenta: 35,
             cyan: 36,
             white: 37,
             gray: 90,
             grey: 90
        },
        background: {
             black: 40,
             red: 41,
             green: 42,
             yellow: 43,
             blue: 44,
             magenta: 45,
             cyan: 46,
             white: 47
        },
        effect: {
            bold: 1,
            dim: 2,
            italic: 3,
            underline: 4,
            blink: 5,
            inverse: 7,
            hidden: 8,
            strikethrough: 9,
        }
    };
    /*
     * @param {string} text
     * @private
     * @return {string}
     */
    const _remove = function (text){
        return text.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
    }
}



exports.base = consoleStyleBase;
