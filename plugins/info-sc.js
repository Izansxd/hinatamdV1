let handler = async (m, { conn }) => {
let sewa = `
*❏––––––『 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 』––––––❏*

Mau Scriptnya? 
Ada Di YouTube, Tidak Untuk Di Jual Belkan!!! Sc Ini Gratis.\nhttps://youtube.com/@VinssBotz\nKebutuhan Bot WhatsApp\nhttps://lynk.id/kahfi.xd\n⚠️Jika Ada Yang Menjual Hub Pembuat http://wa.me/62895332105995

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sc|script)$/i

export default handler