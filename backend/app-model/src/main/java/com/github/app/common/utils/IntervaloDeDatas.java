package com.github.app.common.utils;

import java.time.LocalDate;

public class IntervaloDeDatas {

    private final LocalDate inicio;
    private final LocalDate fim;
    
    public IntervaloDeDatas(final LocalDate inicio, final LocalDate fim) {
        this.inicio = inicio;
        this.fim = fim;
    }

    public LocalDate getInicio() {
        return inicio;
    }

    public LocalDate getFim() {
        return fim;
    }
}
