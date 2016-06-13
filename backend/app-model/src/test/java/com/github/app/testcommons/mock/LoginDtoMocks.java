package com.github.app.testcommons.mock;

import com.github.app.model.dto.LoginDto;

public class LoginDtoMocks {
    
    public static LoginDto LoginDtoComLoginInexistente() {
        LoginDto dto = new LoginDto();
        dto.setLogin("abc");
        dto.setSenha("111111");
        return dto;
    }
    
    public static LoginDto LoginDtoLoginValidoSenhaInvalida() {
        LoginDto dto = new LoginDto();
        dto.setLogin("pedro");
        dto.setSenha("111111");
        return dto;
    }
    
    public static LoginDto LoginDtoValido() {
        LoginDto dto = new LoginDto();
        dto.setLogin("pedro");
        dto.setSenha("$$pmd1##");
        return dto;
    }
    
}
