package com.github.app.jpa.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.sql.Time;
import java.time.LocalTime;

/**
 * Converts {@link LocalTime} to {@link java.sql.Time} and back in support of
 * JPA persistence.
 * <p>
 * The existence of this class in the classpath and it being known by the
 * persistence unit is sufficient to allow you to use the as-of Java SE 8
 * {@link LocalTime} class in an {@link javax.persistence.Entity} or in other
 * persistable classes.
 * <p>
 * Important: the setting of <code>@Converter(autoApply = true)</code> in this
 * class will make this conversion effective for all Entities that have one or
 * more persistent {@link java.time.LocalTime} properties.
 * <p>
 * The persistence provider must minimally support
 * <a
 * href="https://jcp.org/aboutJava/communityprocess/final/jsr338/index.html">JPA
 * 2.1</a>
 * for this to work.
 */
@Converter(autoApply = true)
public class LocalTimeConverter implements AttributeConverter<LocalTime, java.sql.Time> {

    @Override
    public Time convertToDatabaseColumn(LocalTime entityValue) {
        return (entityValue == null) ? null : Time.valueOf(entityValue);
    }

    @Override
    public LocalTime convertToEntityAttribute(Time databaseValue) {
        return (databaseValue == null) ? null : databaseValue.toLocalTime();
    }

}
