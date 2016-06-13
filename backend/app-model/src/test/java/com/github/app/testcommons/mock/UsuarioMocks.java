package com.github.app.testcommons.mock;

import org.junit.Ignore;

import com.github.app.model.entity.Usuario;

@Ignore
public class UsuarioMocks {
    
    public static final String NOME_USUARIO_EDITADO = "Usuario Editado";
    
    public static Usuario joaoDaSilva() {
        Usuario usuario = new Usuario();
        usuario.setNome("João da silva");
        usuario.setLogin("joao");
        usuario.setSenha("$2a$12$.8JLsecpO0v/lt3cHjZFfup752E6XADygn9KOwKDOfQXkwo4PDBCG");
        return usuario;
    }
    
    public static Usuario juliaCarvalho() {
        Usuario usuario = new Usuario();
        usuario.setNome("Júlia Carvalho");
        usuario.setLogin("julia");
        usuario.setSenha("$2a$12$yqUdBXdg1NziORkrZ.o1EOG3aE2itcQ5EU6b1YQ8k1rj5q/WeDKz2");
        return usuario;
    }
    
    public static Usuario pedroMendonca() {
        Usuario usuario = new Usuario();
        usuario.setNome("Pedro Mendonça");
        usuario.setLogin("pedro");
        usuario.setSenha("$2a$12$rEv0/9B65EUo4vpRL0fODONaGxIBITfeEjy2famVobfoPQD0G2ki2");
        return usuario;
    }
    
    public static Usuario preencheId(Usuario usuario, Long id) {
        usuario.setId(id);
        return usuario;
    }
    
}
