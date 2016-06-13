package com.github.app.model.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.app.model.dto.Estado;

@Entity
@Table(name = "endereco")
public class Endereco implements Serializable, IEntity<Long> {

    private static final long serialVersionUID = 2680325576386180861L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    private Integer numero;

    @NotNull
    @Size(min = 6, max = 40)
    private String rua;

    @NotNull
    @Size(min = 6, max = 40)
    private String bairro;

    @NotNull
    @Size(min = 6, max = 40)
    private String complemento;
    
    @NotNull
    @Size(min = 6, max = 40)
    private String pontoDeReferencia;

    @NotNull
    @Size(min = 8, max = 8)
    private String cep;
    
    @NotNull
    @Size(min = 4, max = 40)
    private String cidade;
    
    @NotNull
    private Estado estado;
    
    @Override
    public Long getId() {
        return id;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getPontoDeReferencia() {
        return pontoDeReferencia;
    }

    public void setPontoDeReferencia(String pontoDeReferencia) {
        this.pontoDeReferencia = pontoDeReferencia;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }
    
}
