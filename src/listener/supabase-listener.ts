import SupabaseService from "../config/supabase-service";

class SupabaseListener {
    private supabse = SupabaseService.client;
    private changes :any;
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
        )
        .subscribe()
    }

    public async unsubscribe(){
        this.changes.unsubscribe();
    }

}

export default new SupabaseListener();

