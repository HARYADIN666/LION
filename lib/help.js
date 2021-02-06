const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `*${botName}*
ᴴᵃˡˡᵒ, ${pushname}
ꜱɪʟᴀʜᴋᴀʜ ᴩɪʟɪʜ ᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ
╭──────────────────
│➥ ɴᴀᴍᴀ : ${pushname}
│➥ ᴜᴀɴɢ : ʀᴩ:${uangku}
│➥ xᴩ : ${reqXp}
│➥ ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
│➥ ᴜꜱᴇʀ : ${_registered.length}
╰──────────────────
╭──────────────────
│➥ *${prefix}ⁱⁿᶠᵒ*
│➥ *${prefix}ᵖⁱⁿᵍ*
│➥ *${prefix}ᵈᵒⁿᵃˢⁱ*
│➥ *${prefix}ᵒʷⁿᵉʳ*
╰──────────────────
╭──────────────────
│➥ *${prefix}ˢⁱᵐᵖˡᵉ*              
│➥ *${prefix}ᵐᵃᵏᵉʳ*
│➥ *${prefix}ᵍᵃᵇᵘᵗ*
│➥ *${prefix}ʳᵃⁿᵈᵒᵐ*
│➥ *${prefix}ᵈᵒᵐᵖᵉᵗ*
│➥ *${prefix}ᵒᵗʰᵉʳ*
│➥ *${prefix}ᵍʳᵒᵘᵖ*
│➥ *${prefix}ᵒʷᵇ*
╰──────────────────
╭──────────────────
│POWERED BY ${ownerName}
╰──────────────────`
}
exports.help = help
