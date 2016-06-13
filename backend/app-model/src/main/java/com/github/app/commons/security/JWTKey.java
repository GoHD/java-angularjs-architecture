package com.github.app.commons.security;

import java.security.Key;

import io.jsonwebtoken.impl.crypto.MacProvider;

public class JWTKey {
    
    public static final Key key = MacProvider.generateKey();
    
}
