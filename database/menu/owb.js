const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `Hallo, ${pushname} 👋
ꜱɪʟᴀʜᴋᴀʜ ᴩɪʟɪʜ\nᴍᴇɴᴜ ᴅɪʙᴀᴡᴀʜ..., ${sender.split("@")[0]}
╭──────────────
│《✰ᴏᴡɴᴇʀ ᴍᴇɴᴜ✰》
╰──────────────
╭──────────────
│➥ ɴᴀᴍᴀ : ${pushname}
│➥ ʟᴇᴠᴇʟ : ${getLevelingLevel(sender)}
│➥ ᴜꜱᴇʀ : ${_registered.length}
╰──────────────
╭──────────────
│➥ *ᵇᶜ*
│➥ *ᵇᶜᵍᶜ*
│➥ *ᶜˡᵉᵃʳᵃˡˡ*
│➥ *ᵇˡᵒᶜᵏ*
│➥ *ᵘⁿᵇˡᵒᶜᵏ*
│➥ *ᶜˡᵒⁿᵉ*
│➥ *ˡᵉᵃᵛᵉ*
│➥ *ˢᵉᵗᵖᵖᵇᵒᵗ*
│➥ *ˢᵉᵗʳᵉᵖˡʸ*
│➥ *ˢᵉᵗᵖʳᵉᶠⁱˣ*
│➥ *ᵇᵃⁿ*
│➥ *ᵘⁿᵇᵃⁿ*
╰──────────────
╭──────────────
│   ʙy ʜᴀʀyᴀᴅɪɴ
╰──────────────`
}
exports.owb = owb
