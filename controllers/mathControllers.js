const operations = require("../operations");


const sumar = (req, res, next) => {
    const { a, b} = req.params;
    const suma = operations.sumar(a,b);
    res.json({suma: suma});
}


const restar = (req, res, next) => {
    const { a, b} = req.params;
    res.json({suma: a-b});
}


const multiplicar = (req, res, next) => {
    const { a, b} = req.params;
    res.json({suma: a*b});
}

const dividir = (req, res, next) => {
    const {a, b} = req.params;
    res.json({dividir: a/b});
}

exports.sumar = sumar;
exports.dividir = dividir;
exports.restar = restar;
exports.multiplicar = multiplicar;
