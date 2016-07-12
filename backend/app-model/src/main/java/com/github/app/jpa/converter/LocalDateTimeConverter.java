package com.github.app.jpa.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.sql.Timestamp;
import java.time.LocalDateTime;

/**
 * Converts {@link LocalDateTime} to {@link java.sql.Time} and back in support
 * of JPA persistence.
 * <p>
 * The existence of this class in the classpath and it being known by the
 * persistence unit is sufficient to allow you to use the as-of Java 8
 * {@link LocalDateTime} class in an {@link javax.persistence.Entity} or in
 * other persistable classes.
 * <p>
 * Important: the setting of <code>@Converter(autoApply = true)</code> in this
 * class will make this conversion effective for all Entities that have one or
 * more persistent {@link java.time.LocalDateTime} properties.
 * <p>
 * The persistence provider must minimally support
 * <a
 * href="https://jcp.org/aboutJava/communityprocess/final/jsr338/index.html">JPA
 * 2.1</a>
 * for this to work.
 */
@Converter(autoApply = true)
public class LocalDateTimeConverter implements AttributeConverter<LocalDateTime, Timestamp> {

    @Override
    public java.sql.Timestamp convertToDatabaseColumn(LocalDateTime entityValue) {
        return (entityValue == null) ? null : Timestamp.valueOf(entityValue);
    }

    @Override
    public LocalDateTime convertToEntityAttribute(Timestamp databaseValue) {
        return (databaseValue == null) ? null : databaseValue.toLocalDateTime();
    }

}
