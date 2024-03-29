import { SupabaseClient, createClient } from "@supabase/supabase-js";
import ConfigService from "./config-service";
class SupabaseService {

    supabase :SupabaseClient;
    constructor() {
        // console.log(ConfigService.supabase.url, ConfigService.supabase.key);
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