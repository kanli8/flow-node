-- ---------------------表定义------------------
-- 能力表
drop table ability ;
CREATE TABLE ability (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  input JSONB NOT NULL,
  output JSONB NOT NULL
);
COMMENT ON TABLE ability IS '能力表';
COMMENT ON COLUMN ability.name IS '能力名';
COMMENT ON COLUMN ability.type IS '能力类型，支持python ,deno ,api,api_callback';
COMMENT ON COLUMN ability.input IS '入参，格式符合react-jsonschema-form的规范';
COMMENT ON COLUMN ability.output IS '入参，格式符合react-jsonschema-form的规范';
alter table ability enable row level security;



-- 流程定义表
drop  table flows CASCADE;
CREATE TABLE flows  (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  call_type TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
COMMENT ON TABLE flows IS '流程定义表';
COMMENT ON COLUMN flows.name IS '流程名称';
COMMENT ON COLUMN flows.call_type IS '调用类型 API ,API_CALLBACK';
COMMENT ON COLUMN flows.description IS '流程描述'

alter table flows add column context json ;

alter table flows  enable row level security;




-- 流程触发表


-- 节点表
drop  table nodes CASCADE;
CREATE TABLE nodes (
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
);
COMMENT ON TABLE nodes IS '节点定义表';
COMMENT ON COLUMN nodes.flow_id IS '流程ID';
COMMENT ON COLUMN nodes.name IS '节点名';
COMMENT ON COLUMN nodes.node_type IS '节点类型，START ,END DEAL';
COMMENT ON COLUMN nodes.ability_id IS '能力ID ，主要做校验入参，出参的准确性';
COMMENT ON COLUMN nodes.input IS '入参，相比ability，多写默认值或取值动作';
COMMENT ON COLUMN nodes.output IS '出参，暂时和ability一致';

alter table nodes enable row level security;


-- -----连线表
drop  table edges CASCADE;
CREATE TABLE edges (
  id SERIAL PRIMARY KEY,
  flow_id INTEGER NOT NULL REFERENCES flows (id),
  source_node_id INTEGER NOT NULL REFERENCES nodes (id),
  target_node_id INTEGER NOT NULL REFERENCES nodes (id),
  label TEXT NOT NULL,
  style JSONB NOT NULL
);
COMMENT ON TABLE edges IS '节点定义表';
COMMENT ON COLUMN edges.flow_id IS '流程ID';




-- -----流程实例表
drop  table flow_instances CASCADE;
CREATE TABLE flow_instances (
  id SERIAL PRIMARY KEY,
  flow_id INTEGER NOT NULL REFERENCES flows (id),
  context JSONB,
  progress INTEGER,
  callback_url TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);


-- ------节点实例表
drop table node_instances CASCADE;
CREATE TABLE node_instances (
  id SERIAL PRIMARY KEY,
  flow_id INTEGER NOT NULL REFERENCES flows (id),
  node_id INTEGER NOT NULL REFERENCES nodes (id),
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  input JSONB NOT NULL,
  output JSONB NOT NULL,
  x FLOAT NOT NULL,
  y FLOAT NOT NULL,
  width FLOAT NOT NULL,
  height FLOAT NOT NULL,
  style JSONB NOT NULL
);

alter table node_instances enable row level security;

-- 添加监听


-- 测试流程





