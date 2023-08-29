//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['62895332105995', '美Vinss Panel', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '62895332105995' //Ganti
global.packname = '© Sticker by'
global.author = 'Vinss-MD'
global.namebot = 'Vinss - MD'
global.wm = '© Vinss MD By Vinss Ofc'
global.stickpack = '© Sticker by'
global.stickauth = 'Vinss-MD'
// Link Sosmed
global.sig = 'https://instagram.com/kahfiofc'
global.sgh = 'https://github.com/Maxxy-Botz'
global.sgc = 'https://chat.whatsapp.com/JDmHb6XbcEc1rcgYQHDuCY'
// Donasi
global.psaweria = 'https://saweria.co/MaxxyBotz'
global.ptrakterr = '-'
global.povo = '-'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'j9XFN6zChx'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "j9XFN6zChx",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})