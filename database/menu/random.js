const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ᴴᵃˡˡᵒ, ${pushname}
ꜱɪʟᴀʜᴋᴀʜ ᴩɪʟɪʜ ᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ
╭──────────────────
│          《✰ʀᴀɴᴅᴏᴍ✰》
╰──────────────────
╭──────────────────
│➥ ɴᴀᴍᴀ : ${pushname}
│➥ ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
│➥ ᴜꜱᴇʀ : ${_registered.length}
╰──────────────────
╭──────────────────
│➥ *${prefix}ʳᵃⁿᵈᵒᵐʰᵉⁿᵗᵒⁿᵍ*
│➥ *${prefix}ⁿᵉᵏᵒⁿⁱᵐᵉ*
│➥ *${prefix}ʷⁱᵇᵘ*
│➥ *${prefix}ˡᵒˡⁱ*
│➥ *${prefix}ˢʰᵒᵗᵃ*
│➥ *${prefix}ʰᵘˢᵇᵘ*
│➥ *${prefix}ᵏᵖᵒᵖ*
│➥ *${prefix}ᵃⁿʲⁱⁿᵍ*
│➥ *${prefix}ᵖᵒᵏᵉᵐᵒⁿ*
╰──────────────────
╭──────────────────
│POWERED BY ${ownerName}
╰──────────────────`
}
exports.random = random