import fs from 'fs';
import yaml from 'js-yaml';
import ejs from 'ejs';

interface ServerConfig {
  port: number;
}

interface DatabaseConfig {
  host: string;
  username: string;
  password: string;
}

interface SupabaseConfig {
  url: string;
  key: string;
}

class ConfigService {
  private config: {
    server: ServerConfig;
    database: DatabaseConfig;
    supabase: SupabaseConfig;
  };

  constructor() {
    this.config = {
        server: {
            port: 0,
        },
        database: {
            host: '',
            username: '',
            password: '',
        },
        supabase: {
            url: '',
            key: '',
        },
    };
    this.loadConfig();
  }

  private loadConfig() {
    try {
      const configFile = fs.readFileSync('config.yml', 'utf8');
      const configString = ejs.render(configFile);
        this.config = yaml.load(configString) as {
            server: ServerConfig;
            database: DatabaseConfig; 
            supabase: SupabaseConfig;
        };
    } catch (error) {
      console.error('Error loading configuration:', error);
      process.exit(1);
    }
  }

  get server(): ServerConfig {
    return this.config.server;
  }

  get database(): DatabaseConfig {
    return this.config.database;
  }

  get supabase(): SupabaseConfig {
    return this.config.supabase;
  }
}

export default new ConfigService();
