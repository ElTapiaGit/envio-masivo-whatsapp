const fs = require('fs');
const csv = require('csv-parser');

function parseCSV(filePath) {
    return new Promise((resolve, reject) => {
        const contactos = [];
        fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', row => {
            if ('telefono' in row) {
                const numero = row.telefono?.trim();
                if(numero) contactos.push(numero);
            }
        })
        .on('end', () => resolve(contactos))
        .on('error', err => reject(err));
    });
}

module.exports = { parseCSV };