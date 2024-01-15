import { log } from "console";
import SupabaseService from "../config/supabase-service";
import logger from "../config/logger";
import { RealtimeChannel } from "@supabase/supabase-js";

class SupabaseListener {
    private supabse = SupabaseService.client;
    private changes :RealtimeChannel;
    constructor() {
        
        this.changes = this.supabse
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
            event: '*',
            schema: 'public',
            table: 'node_instances',
            },
            (payload) => console.log(payload)
        ).subscribe();
        logger.info("supabase监听启动:::"+this.changes.timeout);
    }

    public async unsubscribe(){
        this.changes.unsubscribe();
    }

}

export default new SupabaseListener();

