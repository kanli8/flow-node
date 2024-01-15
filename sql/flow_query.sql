insert INTO ability(name,type,input,output) values (
	'HTTP REQUEST',
	'HTTP',
	'{}',
	'{}');

SELECT * FROM ability;


insert INTO ability(name,type,input,output) values (
	'NONE',
	'NONE',
	'{}',
	'{}');

insert INTO ability(name,type,input,output) values (
	'ECHO',
	'ECHO',
	'{}',
	'{}');
	
SELECT * FROM ability;

insert into flows (name,call_type,description) values ('TEST FLOW','REST-API','TEST'); -- 1
SELECT * FROM flows;

  
insert into nodes (flow_id,name,node_type,ability_id,input,output,x,y,width,height,style)
values (1,'test start node','START',1,
		'{"URL":""}',  -- input
		'{}',  --output
		0,
		0,
		0,
		0,
		'{}'
	   );

insert into nodes (flow_id,name,node_type,ability_id,input,output,x,y,width,height,style)
values (1,'test start node','START',3,
		'{}',  -- input
		'{}',  --output
		0,
		0,
		0,
		0,
		'{}'
	   );
SELECT * FROM nodes;


insert into edges (flow_id,source_node_id,target_node_id,label,style) values 
(1,2,3,'lable','{}');

select * from edges;



select * from node_instances;




