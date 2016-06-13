package com.github.app.model.service;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.github.app.commons.security.JWTKey;
import com.github.app.model.dto.LoginDto;
import com.github.app.model.dto.UsuarioLogadoDto;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Stateless
public class AutenticacaoService {
    
    @Inject
    private UsuarioService usuarioService;
    
    public UsuarioLogadoDto realizaLogin(LoginDto loginDto) {
        
        String jwtToken = Jwts.builder().setSubject(loginDto.getLogin()).signWith(SignatureAlgorithm.HS512, JWTKey.key).compact();
        
        UsuarioLogadoDto usuarioLogadoDto = new UsuarioLogadoDto(1L, "admin", "admin", "admin@admin.admin", jwtToken);
        
        return usuarioLogadoDto;
    }
    
}
