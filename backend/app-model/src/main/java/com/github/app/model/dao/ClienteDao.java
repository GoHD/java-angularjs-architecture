package com.github.app.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import com.github.app.model.entity.Cliente;
import com.github.app.model.filtros.FiltroCliente;

public class ClienteDao extends DaoGenerico<Cliente, Long> implements IBuscaComFiltros<Cliente, FiltroCliente>{

    @Override
    public Class<Cliente> getPersistentClass() {
        return Cliente.class;
    }

    @Override
    public void setaParametrosParaBuscaComFiltros(Query query, FiltroCliente filtros) {
        if (filtros.getCnpj() != null) {
            query.setParameter("cnpj", filtros.getCnpj());
        }
        if (filtros.getCpf() != null) {
            query.setParameter("cpf", filtros.getCpf());
        }
        if (filtros.getNome() != null) {
            query.setParameter("nome", filtros.getNome());
        }
        if(filtros.getDataNascimento() != null) {
            query.setParameter("dataNascimento", filtros.getDataNascimento());
        }
        if (filtros.getIntervaloDataNascimento() != null) {
            query.setParameter("dataNascimentoInicio", filtros.getIntervaloDataNascimento().getInicio());
            query.setParameter("dataNascimentoFim", filtros.getIntervaloDataNascimento().getFim());
        }
    }

    @Override
    public String criaClausulaWhereParaBuscaComFiltros(FiltroCliente filtros) {
        StringBuilder where = new StringBuilder();
        where.append("WHERE 1 = 1 ");
        if (filtros.getCnpj() != null) {
            where.append("AND e.cnpj = :cnpj ");
        }
        if (filtros.getCpf() != null) {
            where.append("AND e.cpf = :cpf ");
        }
        if (filtros.getNome() != null) {
            where.append("AND e.nome = :nome ");
        }
        if(filtros.getDataNascimento() != null) {
            where.append("AND e.dataNascimento = :dataNascimento ");
        }
        if (filtros.getIntervaloDataNascimento() != null) {
            where.append("AND e.dataNascimento BETWEEN :dataNascimentoInicio AND :dataNascimentoFim ");
        }
        
        return where.toString();
    }

    @Override
    public EntityManager getEntityManager() {
        return em;
    }
    

}
