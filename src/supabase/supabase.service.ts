import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import WebSocket from 'ws';

@Injectable()
export class SupabaseService {
    public readonly client: SupabaseClient;

    constructor() {
        this.client = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_KEY!,
            {
                realtime: {
                    transport: WebSocket as any,
                },
            }
        )
    }
}
