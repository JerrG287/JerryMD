let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *AXIS:* [${global.ppulsa}]
❏────

┌─「 Donasi 」
│ • *Dana:*
│ • *Gopay:*
│ • *Ovo:*
│ • *QRIS*
│ • Donasi via payment chat owner ⬇️
│ • https://wa.me/+6283160327945
❏────
`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
