package com.github.app.model.entity;

import java.io.Serializable;

public interface IEntity<ID extends Serializable> {
    
    public ID getId();
    
}
