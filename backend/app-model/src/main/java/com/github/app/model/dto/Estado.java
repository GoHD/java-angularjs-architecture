package com.github.app.model.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.github.app.model.entity.IEntity;

@Entity
@Table(name = "estados")
public class Estado implements Serializable, IEntity<Long> {

    private static final long serialVersionUID = -1083081536439402052L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotNull
    @Size(min = 2, max = 2)
    private String sigla;
    
    @NotNull
    private String nome;

    @Override
    public Long getId() {
        return id;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

}
