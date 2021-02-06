const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `Hallo, ${pushname}
ꜱɪʟᴀʜᴋᴀʜ ᴩɪʟɪʜ ᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ
╭──────────────────
│            《✰ᴍᴀᴋᴇʀ✰》
╰──────────────────
╭──────────────────
│➥ ɴᴀᴍᴀ : ${pushname}
│➥ ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
│➥ ᴜꜱᴇʀ : ${_registered.length}
╰──────────────────
╭──────────────────
│➥ *${prefix}ʰᵃʳᵗᵃᵗᵃʰᵗᵃ*
│➥ *${prefix}ᵖᵒʳⁿʰᵘᵇ*
│➥ *${prefix}ᵗʰᵘⁿᵈᵉʳⁿᵃᵐᵉ*
╰──────────────────
╭──────────────────
│POWERED BY ${ownerName}
╰──────────────────`
}
exports.maker = maker