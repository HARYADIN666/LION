const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `ᴴᵃˡˡᵒ, ${pushname}
ꜱɪʟᴀʜᴋᴀʜ ᴩɪʟɪʜ ᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ...
╭──────────────────
│           《✰ꜱɪᴍᴩʟᴇ✰》
╰──────────────────
╭──────────────────
│➥ ɴᴀᴍᴀ : ${pushname}
│➥ ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
│➥ ᴜꜱᴇʀ : ${_registered.length}
╰──────────────────
╭──────────────────
│➥ *${prefix}ˢᵗⁱᶜᵏᵉʳ*
│➥ *${prefix}ᵗᵗᵖ*
│➥ *${prefix}ᵗᵗˢ*
│➥ *${prefix}ᵗᵒⁱᵐᵍ*
│➥ *${prefix}ⁿᵘˡⁱˢ*
│➥ *${prefix}ˢᵗᵃˡᵏⁱᵍ*
│➥ *${prefix}Qᵘᵒᵗᵉˢ*
│➥ *${prefix}ᵇⁱᵏⁱⁿQᵘᵒᵗᵉ*
╰──────────────────
╭──────────────────
│POWERED BY ${ownerName}
╰──────────────────`
}
exports.simple = simple