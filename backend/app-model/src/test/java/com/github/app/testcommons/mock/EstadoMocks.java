package com.github.app.testcommons.mock;

import com.github.app.model.dto.Estado;

public class EstadoMocks {

    public static Estado SC() {
        Estado estado = new Estado();
        estado.setNome("Santa Caratina");
        estado.setSigla("SC");
        return estado;
    }
    
    public static Estado PR() {
        Estado estado = new Estado();
        estado.setNome("Parana");
        estado.setSigla("PR");
        return estado;
    }
    
}
