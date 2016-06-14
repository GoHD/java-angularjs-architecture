package com.github.app.model.filtros;

import java.time.LocalDate;

import com.github.app.common.utils.IntervaloDeDatas;

public class FiltroCliente implements IFiltroDeQuery {

    private final int firstResult;
    private final int maxResults;
    private final IntervaloDeDatas intervaloDataNascimento;
    private final LocalDate dataNascimento;
    private final String nome;
    private final String cpf;
    private final String cnpj;
    
    private FiltroCliente(FiltroClienteBuilder builder) {
        this.firstResult = builder.firstResult;
        this.maxResults = builder.maxResults;
        this.intervaloDataNascimento = builder.intervaloDataNascimento;
        this.dataNascimento = builder.dataNascimento;
        this.nome = builder.nome;
        this.cnpj = builder.cnpj;
        this.cpf = builder.cpf;
    }

    public static class FiltroClienteBuilder {
        private final int firstResult;
        private final int maxResults;
        private IntervaloDeDatas intervaloDataNascimento;
        private LocalDate dataNascimento;
        private String nome;
        private String cpf;
        private String cnpj;
        
        public FiltroClienteBuilder(final int firstResult, final int maxResults) {
            this.firstResult = firstResult;
            this.maxResults = maxResults;
        }
        
        public FiltroClienteBuilder intervaloDataNascimento(LocalDate inicio, LocalDate fim) {
            this.intervaloDataNascimento = new IntervaloDeDatas(inicio, fim);
            return this;
        }
        
        public FiltroClienteBuilder dataNascimento(LocalDate data) {
            this.dataNascimento = data;
            return this;
        }
        
        public FiltroClienteBuilder nome(String nome) {
            this.nome = nome;
            return this;
        }
        
        public FiltroClienteBuilder cpf(String cpf) {
            this.cpf = cpf;
            return this;
        }
        
        public FiltroClienteBuilder cnpj(String cnpj) {
            this.cnpj = cnpj;
            return this;
        }
        
        public FiltroCliente build() {
            return new FiltroCliente(this);
        }
    }
    
    @Override
    public int getFirstResult() {
        return firstResult;
    }

    @Override
    public int getMaxResults() {
        return maxResults;
    }

    public IntervaloDeDatas getIntervaloDataNascimento() {
        return intervaloDataNascimento;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getCnpj() {
        return cnpj;
    }
}
