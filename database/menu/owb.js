const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `Hallo, ${pushname} 👋
ꜱɪʟᴀʜᴋᴀʜ ᴩɪʟɪʜ ᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ, ${sender.split("@")[0]}
╭──────────────────
│      《✰ᴏᴡɴᴇʀ ᴍᴇɴᴜ✰》
╰──────────────────
╭──────────────────
│➥ ɴᴀᴍᴀ : ${pushname}
│➥ ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
│➥ ᴜꜱᴇʀ : ${_registered.length}
╰──────────────────
╭──────────────────
│➥ *${prefix}ᵇᶜ*
│➥ *${prefix}ᵇᶜᵍᶜ*
│➥ *${prefix}ᶜˡᵉᵃʳᵃˡˡ*
│➥ *${prefix}ᵇˡᵒᶜᵏ*
│➥ *${prefix}ᵘⁿᵇˡᵒᶜᵏ*
│➥ *${prefix}ᶜˡᵒⁿᵉ*
│➥ *${prefix}ˡᵉᵃᵛᵉ*
│➥ *${prefix}ˢᵉᵗᵖᵖᵇᵒᵗ*
│➥ *${prefix}ˢᵉᵗʳᵉᵖˡʸ*
│➥ *${prefix}ˢᵉᵗᵖʳᵉᶠⁱˣ*
│➥ *${prefix}ᵇᵃⁿ*
│➥ *${prefix}ᵘⁿᵇᵃⁿ*
╰──────────────────
╭──────────────────
│POWERED BY ${ownerName}
╰──────────────────`
}
exports.owb = owb