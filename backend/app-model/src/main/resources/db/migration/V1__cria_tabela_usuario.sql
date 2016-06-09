CREATE TABLE usuario
(
  id bigserial NOT NULL,
  nome character varying(40) NOT NULL,
  login character varying(40) NOT NULL,
  senha character varying(40) NOT NULL,
  CONSTRAINT pk_player_id PRIMARY KEY (id)
);