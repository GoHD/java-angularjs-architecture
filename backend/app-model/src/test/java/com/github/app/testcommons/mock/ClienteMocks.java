package com.github.app.testcommons.mock;

import java.time.LocalDate;
import java.util.Arrays;

import org.junit.Ignore;

import com.github.app.model.entity.Cliente;

@Ignore
public class ClienteMocks {

    public static Cliente samWinchester() {
        Cliente cliente = new Cliente();
        cliente.setNome("Sam");
        cliente.setSobrenome("Winchester");
        cliente.setRg("177499382");
        cliente.setCpf("67826201624");
        cliente.setDataNascimento(LocalDate.of(1980, 02, 27));
        cliente.setEmail("sam.winchester@gohd.com");
        cliente.setEnderecos(Arrays.asList(EnderecoMocks.enderecoDoSamEDean()));
        return cliente;
    }
    
    public static Cliente deanWinchester() {
        Cliente cliente = new Cliente();
        cliente.setNome("Dean");
        cliente.setSobrenome("Winchester");
        cliente.setRg("243543372");
        cliente.setCpf("33361948061");
        cliente.setDataNascimento(LocalDate.of(1975, 05, 10));
        cliente.setEmail("dean.winchester@gohd.com");
        cliente.setEnderecos(Arrays.asList(EnderecoMocks.enderecoDoSamEDean()));
        return cliente;
    }
    
    public static Cliente balthazar() {
        Cliente cliente = new Cliente();
        cliente.setNome("Balthazar");
        cliente.setSobrenome("Silva");
        cliente.setRg("460876223");
        cliente.setCpf("10955384460");
        cliente.setDataNascimento(LocalDate.of(1968, 11, 18));
        cliente.setEmail("balthazar@gohd.com");
        cliente.setEnderecos(Arrays.asList(EnderecoMocks.enderecoPadrao()));
        return cliente;
    }
}
