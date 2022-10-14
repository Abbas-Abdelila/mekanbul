var express = require('express');
var router = express.Router();

const anaSayfa = function (req, res, next) {
    res.render('anasayfa', { title: 'AnaSayfa'})
}

const mekanBilgisi=function(req, res) {
    res.render('mekanBilgisi', {title: 'Mekanlar'});
};

const yorumEkle = function (req, res, next) {
    res.render('yorumekle', {title: 'Yorum Ekle'})
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}