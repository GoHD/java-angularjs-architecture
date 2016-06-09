package com.github.app.testcommons.mock;

import org.junit.Ignore;

import com.github.app.model.entity.Usuario;

@Ignore
public class UsuarioMocks {
    
    public static final String NOME_USUARIO_EDITADO = "Usuario Editado";
    
    public static Usuario joaoDaSilva() {
        Usuario usuario = new Usuario();
        usuario.setNome("João da silva");
        usuario.setLogin("aaa");
        usuario.setSenha("aaa");
        return usuario;
    }
    
    public static Usuario juliaCarvalho() {
        Usuario usuario = new Usuario();
        usuario.setNome("Júlia Carvalho");
        usuario.setLogin("aaa");
        usuario.setSenha("aaa");
        return usuario;
    }
    
    public static Usuario pedroMendonca() {
        Usuario usuario = new Usuario();
        usuario.setNome("Pedro Mendonça");
        usuario.setLogin("aaa");
        usuario.setSenha("aaa");
        return usuario;
    }
    
    public static Usuario preencheId(Usuario usuario, Long id) {
        usuario.setId(id);
        return usuario;
    }
    
}
