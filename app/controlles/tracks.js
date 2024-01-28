const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async(req, res) => {
    try {
        const listAll = [
            {
                "_id": 1,
                "name": "Los Botones Azules",
                "album": "Mi vida en un cigarro 2",
                "year": "2022",
                "cover": "http://localhost:3000/src/albums/MVEC2.jpeg",
                "artist": {
                    "_id": "1",
                    "name": "Junior H",
                    "nickname": "Junior H",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/JuniorH.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:15",
                "url": "http://localhost:3000/track.mp3"
            },
            {
                "_id": 2,
                "name": "Normal",
                "album": "Feliz Cumpleaños Ferxxo",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/FCF.png",
                "artist": {

                    "_id": "2",
                    "name": "Feid",
                    "nickname": "Feid",
                    "nationality": "CO",
                    "avatar": "http://localhost:3000/src/avatar/Feid.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:50",
                "url": "http://localhost:3000/track-1.mp3"
            },
            {
                "_id": 3,
                "name": "La inocente FT. Feid",
                "album": "Microdosis",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Microdosis.jpeg",
                "artist": {

                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:21",
                "url": "http://localhost:3000/track-2.mp3"
            },
            {
                "_id": 4,
                "name": "El Hijo Mayor",
                "album": "El Hijo Mayor",
                "year": "2022",
                "cover": "http://localhost:3000/src/albums/EHM.jpeg",
                "artist": {
                    "_id": "1",
                    "name": "Junior H",
                    "nickname": "Junior H",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/JuniorH.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:16",
                "url": "http://localhost:3000/track-4.mp3"
            },
            {
                "_id": 5,
                "name": "Nataaoki",
                "album": "Nata Kong",
                "year": "2022",
                "cover": "http://localhost:3000/src/albums/Natakong.jpeg",
                "artist": {

                    "_id": "4",
                    "name": "Natanael Cano",
                    "nickname": "Natanael Cano",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Nata.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:29",
                "url": "http://localhost:3000/track-3.mp3"
            },
            {
                "_id": 6,
                "name": "Brillo",
                "album": "Nata Kong",
                "year": "2022",
                "cover": "http://localhost:3000/src/albums/Natakong.jpeg",
                "artist": {

                    "_id": "4",
                    "name": "Natanael Cano",
                    "nickname": "Natanael Cano",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Nata.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:35",
                "url": "http://localhost:3000/track-5.mp3"
            },
            {
                "_id": 7,
                "name": "La canción",
                "album": "Oasis",
                "year": "2019",
                "cover": "http://localhost:3000/src/albums/Oasis.png",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "04:05",
                "url": "http://localhost:3000/track-6.mp3"
            },
            {
                "_id": 8,
                "name": "Volando Remix",
                "album": "Volando Remix",
                "cover": "http://localhost:3000/src/albums/Volando.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "04:33",
                "url": "http://localhost:3000/track-7.mp3"
            },
            {
                "_id": 9,
                "name": "Adrenalina",
                "album": "Natamontana",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Natamontana.jpeg",
                "artist": {

                    "_id": "4",
                    "name": "Natanael Cano",
                    "nickname": "Natanael Cano",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Nata.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:32",
                "url": "http://localhost:3000/src/tracks/Adrenalina.mp3"
            },
            {
                "_id": 10,
                "name": "Mi Bello Ángel",
                "album": "Natamontana",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Natamontana.jpeg",
                "artist": {

                    "_id": "4",
                    "name": "Natanael Cano",
                    "nickname": "Natanael Cano",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Nata.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:10",
                "url": "http://localhost:3000/src/tracks/MiBelloAngel.mp3"
            },
            {
                "_id": 11,
                "name": "Más altas que bajadas",
                "album": "Natamontana",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Natamontana.jpeg",
                "artist": {

                    "_id": "4",
                    "name": "Natanael Cano",
                    "nickname": "Natanael Cano",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Nata.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:31",
                "url": "http://localhost:3000/src/tracks/MasAltasQueBajadas.mp3"
            },
            {
                "_id": 12,
                "name": "O me voy o te vas",
                "album": "Natamontana",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Natamontana.jpeg",
                "artist": {

                    "_id": "4",
                    "name": "Natanael Cano",
                    "nickname": "Natanael Cano",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Nata.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "04:08",
                "url": "http://localhost:3000/src/tracks/OMeVoyOTeVas.mp3"
            },
            {
                "_id": 13,
                "name": "Tuyo",
                "album": "Microdosis",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Microdosis.jpeg",
                "artist": {

                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "3:21",
                "url": "http://localhost:3000/src/tracks/Tuyo.mp3"
            },
            {
                "_id": 14,
                "name": "Memorias",
                "album": "Microdosis",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Microdosis.jpeg",
                "artist": {

                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "04:02",
                "url": "http://localhost:3000/src/tracks/Memorias.mp3"
            },
            {
                "_id": 15,
                "name": "Nueva Vida",
                "album": "Génesis",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Genesis.jpeg",
                "artist": {

                    "_id": "6",
                    "name": "Peso Pluma",
                    "nickname": "Peso Pluma",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/PP.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:10",
                "url": "http://localhost:3000/src/tracks/NuevaVida.mp3"
            },
            {
                "_id": 16,
                "name": "Luna",
                "album": "Génesis",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Genesis.jpeg",
                "artist": {

                    "_id": "6",
                    "name": "Peso Pluma",
                    "nickname": "Peso Pluma",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/PP.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:42",
                "url": "http://localhost:3000/src/tracks/Luna.mp3"
            },
            {
                "_id": 17,
                "name": "La Victima",
                "album": "La Victima",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/LaVictima.jpeg",
                "artist": {

                    "_id": "7",
                    "name": "Xavi",
                    "nickname": "Xavi",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Xavi.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:36",
                "url": "http://localhost:3000/src/tracks/LaVictima.mp3"
            },
            {
                "_id": 18,
                "name": "La Diabla",
                "album": "La Diabla",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/LaDiabla.jpeg",
                "artist": {
                    "_id": "7",
                    "name": "Xavi",
                    "nickname": "Xavi",
                    "nationality": "MX",
                    "avatar": "http://localhost:3000/src/avatar/Xavi.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:52",
                "url": "http://localhost:3000/src/tracks/LaDiabla.mp3"
            }, 
            {
                "_id": 19,
                "name": "Donde se aprende a querer",
                "album": "Estrella",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Estrella.jpeg",
                "artist": {

                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:32",
                "url": "http://localhost:3000/src/tracks/DondeSeAprendeAQuerer.mp3"
            },
            {
                "_id": 20,
                "name": "Pasajero",
                "album": "Estrella",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Estrella.jpeg",
                "artist": {

                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:30",
                "url": "http://localhost:3000/src/tracks/Pasajero.mp3"
            },
            {
                "_id": 23,
                "name": "Media Luna",
                "album": "Estrella",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Estrella.jpeg",
                "artist": {

                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "2:15",
                "url": "http://localhost:3000/src/tracks/MediaLuna.mp3"
            },
            {
                "_id": 21,
                "name": "Reina",
                "album": "Estrella",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Estrella.jpeg",
                "artist": {
                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:32",
                "url": "http://localhost:3000/src/tracks/Reina.mp3"
            },
            {
                "_id": 22,
                "name": "Un Deseo",
                "album": "Estrella",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Estrella.jpeg",
                "artist": {
                    "_id": "3",
                    "name": "Mora",
                    "nickname": "Mora",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Mora.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "3:39",
                "url": "http://localhost:3000/src/tracks/UnDeseo.mp3"
            },
            {
                "_id": 23,
                "name": "Mía",
                "album": "X100PRE",
                "year": "2018",
                "cover": "http://localhost:3000/src/albums/X100PRE.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "04:05",
                "url": "http://localhost:3000/src/tracks/Mia.mp3"
            },
            {
                "_id": 24,
                "name": "Otra Noche en Miami",
                "album": "X100PRE",
                "year": "2018",
                "cover": "http://localhost:3000/src/albums/X100PRE.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:53",
                "url": "http://localhost:3000/src/tracks/OtraNocheenMiami.mp3"
            },
            {
                "_id": 25,
                "name": "Estamos Bien",
                "album": "X100PRE",
                "year": "2018",
                "cover": "http://localhost:3000/src/albums/X100PRE.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:28",
                "url": "http://localhost:3000/src/tracks/EstamosBien.mp3"
            },
            {
                "_id": 26,
                "name": "Si Estuviésemos Juntos",
                "album": "X100PRE",
                "year": "2018",
                "cover": "http://localhost:3000/src/albums/X100PRE.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:49",
                "url": "http://localhost:3000/src/tracks/SiEstuviesemosJuntos.mp3"
            },
            {
                "_id": 27,
                "name": "La Santa",
                "album": "X100PRE",
                "year": "2018",
                "cover": "http://localhost:3000/src/albums/X100PRE.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:27",
                "url": "http://localhost:3000/src/tracks/LaSanta.mp3"
            },
            {
                "_id": 28,
                "name": "Perro Negro",
                "album": "NDSLQVPM",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/NDSLQVPM.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:43",
                "url": "http://localhost:3000/src/tracks/PerroNegro.mp3"
            },
            {
                "_id": 29,
                "name": "Mónaco",
                "album": "NDSLQVPM",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/NDSLQVPM.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/Monaco.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "04:27",
                "url": "http://localhost:3000/src/tracks/PerroNegro.mp3"
            },
            {
                "_id": 30,
                "name": "Hibiki",
                "album": "NDSLQVPM",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/NDSLQVPM.jpeg",
                "artist": {
                    "_id": "5",
                    "name": "Bad Bunny",
                    "nickname": "Bad Bunny",
                    "nationality": "PR",
                    "avatar": "http://localhost:3000/src/avatar/BadBunny.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "04:05",
                "url": "http://localhost:3000/src/tracks/Hibiki.mp3"
            },
            {
                "_id": 31,
                "name": "Feliz Cumpleaños Ferxxo",
                "album": "Feliz Cumpleaños Ferxxo",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/FCF.png",
                "artist": {

                    "_id": "2",
                    "name": "Feid",
                    "nickname": "Feid",
                    "nationality": "CO",
                    "avatar": "http://localhost:3000/src/avatar/Feid.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:36",
                "url": "http://localhost:3000/src/tracks/FelizCumpleañosFerxxo.mp3"
            },
            {
                "_id": 32,
                "name": "Si Te La Encuentras Por Ahi",
                "album": "Feliz Cumpleaños Ferxxo",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/FCF.png",
                "artist": {

                    "_id": "2",
                    "name": "Feid",
                    "nickname": "Feid",
                    "nationality": "CO",
                    "avatar": "http://localhost:3000/src/avatar/Feid.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "02:36",
                "url": "http://localhost:3000/src/tracks/SiTeLaEncuentrasPorAhi.mp3"
            },
            {
                "_id": 33,
                "name": "Luna",
                "album": "Ferxocalipsis",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Ferxocalipsis.jpeg",
                "artist": {

                    "_id": "2",
                    "name": "Feid",
                    "nickname": "Feid",
                    "nationality": "CO",
                    "avatar": "http://localhost:3000/src/avatar/Feid.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:17",
                "url": "http://localhost:3000/src/tracks/Luna2.mp3"
            },
            {
                "_id": 34,
                "name": "Classy 101",
                "album": "Ferxocalipsis",
                "year": "2023",
                "cover": "http://localhost:3000/src/albums/Ferxocalipsis.jpeg",
                "artist": {

                    "_id": "2",
                    "name": "Feid",
                    "nickname": "Feid",
                    "nationality": "CO",
                    "avatar": "http://localhost:3000/src/avatar/Feid.jpeg"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "dur": "03:16",
                "url": "http://localhost:3000/src/tracks/Classy101.mp3"
            },
        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }