/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@ravindu01manoj/web-sew');
const fs = require('fs');


async function sewqueen(waversion) {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = waversion;

	conn.on('connecting', async () => {
		console.log(`${chalk.bold.rgb(238, 7, 230)('S')}${chalk.bold.rgb(4, 252, 29)('E')}${chalk.bold.rgb(252, 4, 37)('W ')}${chalk.bold.rgb(21, 4, 252)('Q')}${chalk.bold.rgb(0, 255, 255)('U')}${chalk.bold.rgb(255, 0, 127)('E')}${chalk.bold.rgb(76, 0, 153)('E')}${chalk.bold.rgb(255, 255, 0)('N')}

${chalk.bold.rgb(255, 255, 0)('----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')}

${chalk.redBright.italic('QeenSewString')}
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
		)
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ',
				MessageType.text
			);
		
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
let SEW = require('sew-queen-web-update')

async function startqr() {
let Web = await SEW.SewQueenWebUpdate()
sewqueen(Web)

}
startqr()
