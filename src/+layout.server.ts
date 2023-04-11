import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import type { ServerLoadEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event: ServerLoadEvent) => {
  return {
    session: await getServerSession(event)
  };
};
