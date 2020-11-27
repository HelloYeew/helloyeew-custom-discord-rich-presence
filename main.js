const client = require('discord-rich-presence')('id');
client.updatePresence({
    detail: "First line",
    state: "Second line",
    largeImageKey: 'largeimage',
    largeImageText: "Large Image Hover Text",
    smallImageKey: 'smallimage',
    smallImageText: "Small Image Hover Text",
    startTimestamp: Date.now(),
    instance: true,
});