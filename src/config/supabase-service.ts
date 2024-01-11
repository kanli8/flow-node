import { SupabaseClient, createClient } from "@supabase/supabase-js";
import ConfigService from "./config-service";
class SupabaseService {

    private supabase :SupabaseClient;
    constructor() {
        this.supabase = createClient(
            ConfigService.supabase.url,
            ConfigService.supabase.key
        );
    }

    get client(): SupabaseClient {
        return this.supabase;
    }

}

export default new SupabaseService();