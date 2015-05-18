# webdanfe
Gerador de DANFE em pdf utilizando o webservice do Webdanfe

### Instalação

`npm install webdanfe --save`

### Utilização

```javascript
var webdanfe = require('webdanfe'),
    fs = require('fs'),
    xml = fs.readFileSync('arquivoXmlDaNotaFiscl-procNfe.xml').toString();

webdanfe.gerarDanfe(xml, function(err, pdf) {
    if(err) {
        throw err;
    }

    fs.writeFileSync('danfe.pdf', pdf, {
        encoding: 'binary'
    });
});
```
