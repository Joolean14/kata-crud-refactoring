package co.com.sofka.crud.services;

import co.com.sofka.crud.repositories.ListRepository;
import co.com.sofka.crud.entities.List;
import model.ListaToDoModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListService {

    @Autowired
    private ListRepository repository;

    public Iterable<List> list(){
        return repository.findAll();
    }

    public ListaToDoModel save(ListaToDoModel listaToDoModel){
        List lista1 = new List();
        lista1.setName(listaToDoModel.getNombre());
        List lista2 = repository.save(lista1);
        ListaToDoModel modelo1 = new ListaToDoModel();
        modelo1.setId(lista2.getId());
        modelo1.setNombre(lista2.getName());
        return  modelo1;
    }

    public void delete(Long id){
        repository.delete(get(id));
    }

    public List get(Long id){
        return repository.findById(id).orElseThrow();
    }

}