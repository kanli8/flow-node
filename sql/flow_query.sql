insert INTO ability(name,type,input,output) values (
	'HTTP REQUEST',
	'HTTP',
	'{}',
	'{}');
	
SELECT * FROM ability;

insert into flows (name,call_type,description) values ('TEST FLOW','REST-API','TEST'); -- 1

  id SERIAL PRIMARY KEY,
  flow_id INTEGER NOT NULL REFERENCES flows (id),
  name TEXT NOT NULL,
  node_type text NOT NULL,
  ability_id INTEGER NOT NULL REFERENCES ability (id),
  input JSONB NOT NULL,
  output JSONB NOT NULL,
  x FLOAT NOT NULL,
  y FLOAT NOT NULL,
  width FLOAT NOT NULL,
  height FLOAT NOT NULL,
  style JSONB NOT NULL
  
insert into nodes (flow_id,name,node_type,ability_id,input,output,x,y,width,height)
values
();