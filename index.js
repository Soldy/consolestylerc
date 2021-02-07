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
        let styled = style;
        for (let i in styles)
            for (let s in styles[i])
                      styled += styler(s, styles[i][s]);
        for (let s in styles)
               styled += styler(s, styles[s]);
        let last = text.lastIndexOf("\u001b[0m");
        text = text.slice(0, last)+text.slice(last).replace("\u001b[0m", "\u001b[0m"+styled+"m");
        return styled+"m"+text+"\u001b[0m";
    }
    /*
     * @param {string} text
     * @public
     * @return {string}
     */
    this.remove = function (text){
        return text.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
    }
    /*
     * @param {string} type
     * @param {string} style
     * @private
     * @return {string}
     */
    const styler = function(type,value){
        if (typeof map[type] === 'undefined')
             return '';
        if (type === 'effect')
             return effect (value);
        if (typeof map[type][value] !== "undefined"){
            return ";"+map[type][value].toString();
        }else{
             if(type  === "color"){
                 let color = colorCheck(value);
                 if (style !== false)
                     return color;
             }else if(type  === "background"){
                 let background = backgroundCheck(value);
                 if (style !== false)
                     return background;
             }
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
                 if(typeof map.effect[i] !== "undefined")
                     out += ';'+map.effect[i].toString();
        }else{
            if(typeof map.effect[effects] !== "undefined")
                out += ';'+map.effect[effects].toString();
        }
        return out;
    }
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const colorCheck = function (color){
        if(typeof color === "undefined")
            return false;
        if(parseInt(color).toString() === color.toString())
            return ";38;5;"+color;
        return ";38:2:"+style+":104";
    }
    /*
     * @param {string} color
     * @private
     * @return {string}
     */
    const backgroundCheck = function (color){
        if(typeof color === "undefined")
            return false;
        if(parseInt(color).toString() === color.toString())
            return ";48;5;"+color;
        return ";48:2:"+style+":104";
    }
    /*
     * @private
     * @var {string}
     */
    const style = "\u001b[85";
    /*
     * @private
     * @var {object}
     */
    const map={
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
}



exports.base = consoleStyleBase;
