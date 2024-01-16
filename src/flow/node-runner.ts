import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { httpRequest } from "./nodes/HttpRequest";
class NodeRunner {
    nodes: { [key: string]: Function } = {};
  constructor() {
    this.nodes.httpRequest = httpRequest;

  }

    run(nodeName: string, params: any) {
        let node = this.nodes[nodeName];
        if (node) {
        return node(params);
        } else {
        throw new Error(`Node ${nodeName} not found`);
        }
    }

   runNode(playload: RealtimePostgresChangesPayload<NodeInstances>) {
    // {
    //     schema: 'public',
    //     table: 'node_instances',
    //     commit_timestamp: '2024-01-15T08:43:40.148Z',
    //     eventType: 'INSERT',
    //     new: {
    //       flow_id: 1,
    //       height: 0,
    //       id: 3,
    //       input: {},
    //       name: 'dd',
    //       node_id: 2,
    //       output: {},
    //       type: 'START',
    //     },

        let newData = playload.new
        


   }   
  
}

export default new NodeRunner();