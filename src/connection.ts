import { client } from '$lib/base/db';
import type { AuthSession, RealtimeChannel, RealtimeMessage, User } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
export const connection_state = writable('DISCONNECTED');
export default class Connection {
  channel: RealtimeChannel;

  session: AuthSession | null = null;
  user: User;

  set status(n: string) {
    connection_state.set(n);
  }

  constructor(user: User) {
    this.user = user;

    this.channel = client.channel('system');
    this.channel.on('presence', { event: 'sync' }, () => this.presenceChanged);
    this.channel.on('broadcast', { event: 'presence' }, (payload) => {
      this.syncPresence(payload);
    });

    this.channel.subscribe((status) => {
      switch (status) {
        case 'SUBSCRIBED':
          console.log('subscribed to the network channel.', status);
          this.status = 'Connected';
          // this is the central ingestion point for where you can begin sending/reciving data.
          break;

        case 'CLOSED':
          console.log('the network channel has closed normally.', status);
          this.close();
          this.status = 'Disconnected';
          break;

        case 'CHANNEL_ERROR':
          console.log('error from the network channel.', status);
          this.error();
          this.status = 'Disconnected (500)';
          break;

        case 'TIMED_OUT':
          console.log('timed out on the network channel.', status);
          this.timeout();
          this.status = 'Disconnected (404)';
          break;

        default:
          console.log('unhandled status from realtime channel.', status);
          this.status = 'ERROR';
          break;
      }
    });
  }

  restart() {
    this.channel.subscribe();
  }

  syncPresence(payload: { [key: string]: unknown; type: 'broadcast'; event: string }) {
    console.log('presence changed', payload);
  }

  close() {
    console.log('closed the network');
  }
  error() {
    console.log('error from the network');
  }
  timeout() {
    console.log('timeout from the network');
  }

  playerJoined(message: RealtimeMessage) {
    console.log('joined', message);
  }
  playerLeft(message: RealtimeMessage) {
    console.log('left', message);
  }

  presenceChanged(): void {
    const newState = this.channel.presenceState();
    console.log('sync', newState);
  }
}
