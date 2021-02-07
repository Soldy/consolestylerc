## console style rc 


Simple cli styler


## init

```javascript
const styler = new (require('consolestylerc').base();

```

## simple foreground color change

```javascript
styler.style(
    'test red text',
    {
         'color':'red'
    }
);
```

## simple foreground color change

```javascript
styler.style(
    'test text with blue background',
    {
         'background':'blue'
    }
);
```

## simple effect

```javascript
styler.style(
    'blinking  test text',
    {
         'effect':'blink'
    }
);
```


## simple multiple style 

```javascript
styler.style(
    'styled test text',
    {
         'color':'cyan',
         'background':'cyan',
         'effect':[
            'blink',
            'underline'
         ]
    }
);
```

## supported styles

| style         | Types              |
|---------------|--------------------|
| bold          | effect             |
| dim           | effect             |
| italic        | effect             |
| underline     | effect             |
| blink         | effect             |
| inverse       | effect             |
| hidden        | effect             |
| strikethrough | effect             |
| black         | color,background   |
| red           | color,background   |
| green         | color,background   |
| yellow        | color,background   |
| blue          | color,background   |
| cyan          | color,background   |
| white         | color,background   |
| grey          | color              |

