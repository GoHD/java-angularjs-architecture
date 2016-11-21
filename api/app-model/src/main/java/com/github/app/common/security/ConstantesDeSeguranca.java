package com.github.app.common.security;

import java.security.Key;

import io.jsonwebtoken.impl.crypto.MacProvider;

public class ConstantesDeSeguranca {
    
    public static final Key JWT_KEY = MacProvider.generateKey();
    public static final int BCRYPT_WORKLOAD = 12;
    
}
