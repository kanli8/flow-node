import { log } from "console";
import SupabaseService from "../config/supabase-service";
import logger from "../config/logger";
import { RealtimeChannel, RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import NodeRunner from "../flow/node-Runner"
import FlowRunner from "../flow/flow-runner";
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
            (payload) => NodeRunner.runNode(payload as RealtimePostgresChangesPayload<NodeInstances>)
        ).on(
            'postgres_changes',
            {
              event: '*',
              schema: 'public',
              table: 'flow_instances',
            },
            (payload) => FlowRunner.runFlow(payload as RealtimePostgresChangesPayload<FlowInstances>)
          ).subscribe();
        //   this.changes.timeout = 30000;
        // logger.info("supabase监听启动:::"+this.changes.timeout);
    }

    public async unsubscribe(){
        this.changes.unsubscribe();
    }

}

export default new SupabaseListener();

