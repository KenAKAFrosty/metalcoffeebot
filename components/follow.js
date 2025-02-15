import { tmi } from './../vendor/tmi.js';
import { seSocket } from './../vendor/se.js';
import { config } from 'dotenv';
import { logColorMsg } from './../helpers.js';

// Load environment variables.
config();

seSocket.on('event', (data) => {
   if ( `follow` === data.type ) {
      logColorMsg(`New follower ${data.data.displayName}`);
    tmi.say(process.env.CHANNEL_NAME, `Welcome to the MC Lounge, @${data.data.displayName} metala19Cheers Coffee is in the back.`);
   }
});
