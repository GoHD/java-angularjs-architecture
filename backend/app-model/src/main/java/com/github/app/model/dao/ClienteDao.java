package com.github.app.model.dao;

import com.github.app.model.entity.Cliente;

public class ClienteDao extends DaoGenerico<Cliente, Long>{

    @Override
    protected Class<Cliente> getPersistentClass() {
        return Cliente.class;
    }

}
