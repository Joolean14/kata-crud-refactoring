package co.com.sofka.crud.entities;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
public class List {
    @Id
    @GeneratedValue
    private Long id;
    @NotEmpty
    private String name;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Todo> listaSubTareas;

    public Set<Todo> getListaSubTareas() {
        return listaSubTareas;
    }

    public void setListaSubTareas(Set<Todo> listaSubTareas) {
        this.listaSubTareas = listaSubTareas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
