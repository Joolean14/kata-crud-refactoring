package co.com.sofka.crud.controllers;

import co.com.sofka.crud.entities.List;
import co.com.sofka.crud.services.ListService;
import model.ListaToDoModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ListController {

    @Autowired
    private ListService service;


    @GetMapping(value = "api/lists")
    public Iterable<List> list(){
        return service.list();
    }

    @PostMapping(value = "api/list")
    public ListaToDoModel save(@RequestBody ListaToDoModel listaToDoModel){
        return service.save(listaToDoModel);
    }

//    @PutMapping(value = "api/list")
//    public List update(@RequestBody List list){
//        if(list.getId() != null){
//            return service.save(list);
//        }
//        throw new RuntimeException("No existe el id para actualizar");
//    }

//    @DeleteMapping(value = "api/{id}/list")
//    public void delete(@PathVariable("id")Long id){
//        service.delete(id);
//    }
//
//    @GetMapping(value = "api/{id}/list")
//    public List get(@PathVariable("id") Long id){
//        return service.get(id);
//    }

}
