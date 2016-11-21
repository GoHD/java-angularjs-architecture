package com.github.app.mapper;

import org.modelmapper.ModelMapper;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Alexandre.Zanelatto on 17/11/2016.
 */
@ApplicationScoped
public class DefaultModelMapper {

    @Inject
    ModelMapper modelMapper;

    public <E, D> E fromDto(D dto, Class<E> clazz) {
        return modelMapper.map(dto, clazz);
    }

    public <E, D> List<E> fromDto(List<D> dtos,  Class<E> clazz) {
        if (dtos == null) {
            return null;
        }
        return dtos.stream().map(d -> this.<E, D>fromDto(d, clazz)).collect(Collectors.toList());
    }

    public <E, D> D toDto(E entity, Class<D> clazz) {
        return modelMapper.map(entity, clazz);
    }

    public <E, D> List<D> toDto(List<E> entities, Class<D> clazz) {
        if (entities == null) {
            return null;
        }
        return entities.stream().map(e -> this.<E, D>toDto(e, clazz)).collect(Collectors.toList());
    }
}
