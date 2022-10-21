var express = require('express');
var router = express.Router();

const anaSayfa = function(req, res) {
    res.render('anasayfa', {
        "baslik": "Anasayfa",
        "sayfaBaslik": {
            "siteAd": "MekanBul",
            "slogan": "Civardaki Mekanlari Kesfet",
        },
        "mekanlar": [
            {
                "ad": "Starbucks",
                "adres": "Centrum Garden AVM",
                "puan": "4",
                "imkanlar": ["Dunya Kahveleri", "kekler", "Pastalar"],
                "mesafe": "10km"
            },
            
            {
                "ad": "Gloria Jeans",
                "adres": "SDU Dogu Kampusu",
                "puan": "3",
                "imkanlar": ["Kahve", "Cay", "Pasta"],
                "mesafe":"5km"
            }
        ]
    });
}

const mekanBilgisi=function(req, res,next) {
    res.render('mekanbilgisi', {
        "baslik": "Mekan Bilgisi",
        "mekanBaslik": "Starbucks",
        "mekanDetay": {
            "ad" : "StarBucks",
            "puan": "3",
            "imkanlar": ["Dunya Kahveleri", "Kekler", "Pastalar"],
            "koordinatlar": {
                "enlem": "37.7",
                "boylam":"30.5"
            },
            "adres": "Centrum Garden AVM",
            "saatler" : [
                {
                    "gunler": "Pazartesi-Cuma",
                    "acilis": "9:00",
                    "kapanis": "23:00",
                    "kapali": false
                },

                {
                    "gunler": "Cumartesi-Pazar",
                    "acilis": "8:00",
                    "kapanis": "22:00",
                    "kapali": false
                }
            ],

            
            "yorumlar": [
                {
                "yorumYapan": "Abbas Abdelila Andya",
                "yorumMetni": "Harika",
                "tarih": "20 Ekim 2022",
                "puan": "4"
                },

                {
                    "yorumYapan": "Naval Ravikant",
                    "yorumMetni": "Starbucks might be cool but not as having leverage",
                    "tarih": "22 Ekim 2022",
                    "puan": "3"
                },    
                
                {
                    "yorumYapan": "Jason Calacanis",
                    "yorumMetni": "Best podcast host",
                    "tarih": "22 Ekim 2022",
                    "puan": "4"
                },
                
            ]

        }
    });
};

const yorumEkle = function (req, res, next) {
    res.render('yorumekle', {title: 'Yorum Ekle'})
}


module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}