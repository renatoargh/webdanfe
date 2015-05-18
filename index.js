var request = require('request');

function gerarDanfe(xml, callback) {
    var req = request.defaults({ jar: true });

    req({
        method: 'POST',
        url: 'https://www.webdanfe.com.br/danfe/GeraDanfe.php',
        headers: {
            'accept-encoding': 'gzip, deflate',
            'cache-control': 'no-cache',
            'Referer': 'http://webdanfe.com.br/danfe/index.html',
        },
        followAllRedirects: true,
        encoding: 'binary',
        formData: {
            arquivoXml: {
                value: xml,
                options: {
                    filename: 'arquivo.xml',
                    contentType: 'text/xml'
                }
            }
        }
    }, function(err, res, body) {
        if(err) {
            return callback(err);
        }

        callback(null, body);
    });
};

module.exports.gerarDanfe = gerarDanfe;
