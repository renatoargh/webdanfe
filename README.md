# webdanfe
Gerador de DANFE em pdf utilizando a [API do Webdanfe](https://www.webdanfe.com.br/danfe/WebDanfeApi.aspx)

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
