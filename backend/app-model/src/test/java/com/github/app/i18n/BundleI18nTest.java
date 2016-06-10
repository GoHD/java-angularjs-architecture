package com.github.app.i18n;

import static org.junit.Assert.*;
import java.util.MissingResourceException;

import org.junit.Test;

public class BundleI18nTest {

    @Test
    public void validaMapeamentoEnumMensagensParaBundle() {
        
        MensagensI18n[] values = MensagensI18n.values();
        
        for (int i = 0; i < values.length; i++) {
            MensagensI18n i18n = values[i];
            try {
                i18n.mensagem();
            } catch (MissingResourceException e) {
                fail(i18n.name());
            }
        }
    }
    
    @Test
    public void validaMapeamentoEnumUsuarioParaBundle() {
        
        UsuarioI18n[] values = UsuarioI18n.values();
        
        for (int i = 0; i < values.length; i++) {
            UsuarioI18n i18n = values[i];
            try {
                i18n.mensagem();
            } catch (MissingResourceException e) {
                fail(i18n.name());
            }
        }
    }
}
