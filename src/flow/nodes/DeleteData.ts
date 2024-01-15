import { PostgrestSingleResponse } from "@supabase/supabase-js";
import SupabaseService from "../../config/supabase-service";
import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
/**
 * 
 * @param params 
 * @returns 
 */
export async function deleteData(params:DeleteParams): Promise<any> {
    const supabase = SupabaseService.client;
    
    let filter =  supabase
        .from(params.table)
        .delete();
    
    if(params.filter){
        params.filter.forEach((item:Filter) => {
            switch(item.operator){
            case 'eq':
                filter = filter.eq(item.columnName, item.value);
                break;
            case 'neq':
                filter = filter.neq(item.columnName, item.value);
                break;
            case 'gt':
                filter = filter.gt(item.columnName, item.value);
                break;
            case 'gte':
                filter = filter.gte(item.columnName, item.value);
                break;
            case 'lt':
                filter = filter.lt(item.columnName, item.value);
                break;
            case 'lte':
                filter = filter.lte(item.columnName, item.value);
                break;
            case 'like':
                filter = filter.like(item.columnName, item.value as string);
                break;
            case 'ilike':
                filter = filter.ilike(item.columnName, item.value as string);
                break;
            case 'is':
                filter = filter.is(item.columnName, item.value);
                break;
            case 'in':
                filter = filter.in(item.columnName, item.value as unknown[]);
                break;
            case 'cs':
                filter = filter.contains(item.columnName, item.value as string | readonly unknown[] | Record<string, unknown>); 
                break;
            case 'cd':
                filter = filter.containedBy(item.columnName, item.value as string | readonly unknown[] | Record<string, unknown>);
                break;
            case 'sl':
                filter = filter.rangeLt(item.columnName, item.value as  string );
                break;
            case 'sr':
                filter = filter.rangeGt(item.columnName, item.value as  string );
                break;
            case 'nxl':
                filter = filter.rangeGte(item.columnName, item.value as  string );
                break;
            case 'nxr':
                filter = filter.rangeLte(item.columnName, item.value as  string );
                break;
            case 'adj':
                filter = filter.rangeAdjacent(item.columnName, item.value as  string );
                break;
            case 'ov':
                filter = filter.overlaps(item.columnName, item.value as  string | readonly unknown[] );
                break;
            case 'fts':
                filter = filter.textSearch(item.columnName, item.value as  string );
                break;
            default:
                break;
            }

          
        });
    }
    let delRes = await filter;
    return delRes;

        // return data;
}

