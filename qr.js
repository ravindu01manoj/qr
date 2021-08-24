/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function sewQueen() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2119, 6];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Sew')}
${chalk.white.italic('QeenSewString')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('QueenSew QR Code: '),
			'QUEENSEW;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'QUEENSEW;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!\nඔබට කොපි කර ගැනීමට නොහැකි නම් ඔබගේ නම්බර් එකට පණිවිඩයක් මගින් කේතය ලැබේ"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!\nඔබට කොපි කර ගැනීමට නොහැකි නම් ඔබගේ නම්බර් එකට පණිවිඩයක් මගින් කේතය ලැබේ'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

sewQueen();
