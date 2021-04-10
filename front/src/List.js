import React, { useContext, useReducer, useEffect, useRef, useState, createContext } from 'react';


const List = () => {
  // const {
  //     dispatch,
  //     state: { todo },
  //   } = useContext(Store);
  //   const currentList = todo.list;
  
  //   useEffect(() => {
  //     fetch(HOST_API + "/todos")
  //       .then((response) => response.json())
  //       .then((list) => {
  //         dispatch({ type: "update-list", list });
  //       });
  //   }, [dispatch]);
  
  //   const onDelete = (id) => {
  //     fetch(HOST_API + "/" + id + "/todo", {
  //       method: "DELETE",
  //     }).then((list) => {
  //       dispatch({ type: "delete-item", id });
  //     });
  //   };
  
  //   const onEdit = (todo) => {
  //     dispatch({ type: "edit-item", item: todo });
  //   };
  
  //   const onChange = (event, todo) => {
  //     const request = {
  //       name: todo.name,
  //       id: todo.id,
  //       completed: event.target.checked,
  //     };
  //     fetch(HOST_API + "/todo", {
  //       method: "PUT",
  //       body: JSON.stringify(request),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((todo) => {
  //         dispatch({ type: "update-item", item: todo });
  //       });
  //   };
  
  //   const decorationDone = {
  //     textDecoration: "line-through",
  //   };
    return (
      <div className="list-container">
        <p className="bold">Lista</p>
  
        {currentList.map((todo) => {
          return (
            <div
              className="list-element"
              key={todo.id}
              style={todo.completed ? decorationDone : {}}
            >
              <div>
                {/* <Checkbox /> */}
                <input
                  className="checkbox"
                  type="checkbox"
                  defaultChecked={todo.completed}
                  onChange={(event) => onChange(event, todo)}
                ></input>
                {todo.id}
              </div>
              <div className="bold">{todo.name}</div>
              <div>
                {/* <Boton /> con props */}
                <button className="boton-eliminar" onClick={() => onDelete(todo.id)}>Eliminar</button>
                <button className="boton-editar" onClick={() => onEdit(todo)}>Editar</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
export default List;
  
  //   const {
  //     dispatch,
  //     state: { todo },
  //   } = useContext(Store);
  //   const currentList = todo.list;
  
  //   useEffect(() => {
  //     fetch(HOST_API + "/todos")
  //       .then((response) => response.json())
  //       .then((list) => {
  //         dispatch({ type: "update-list", list });
  //       });
  //   }, [dispatch]);
  
  //   const onDelete = (id) => {
  //     fetch(HOST_API + "/" + id + "/todo", {
  //       method: "DELETE",
  //     }).then((list) => {
  //       dispatch({ type: "delete-item", id });
  //     });
  //   };
  
  //   const onEdit = (todo) => {
  //     dispatch({ type: "edit-item", item: todo });
  //   };
  
  //   const onChange = (event, todo) => {
  //     const request = {
  //       name: todo.name,
  //       id: todo.id,
  //       completed: event.target.checked,
  //     };
  //     fetch(HOST_API + "/todo", {
  //       method: "PUT",
  //       body: JSON.stringify(request),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((todo) => {
  //         dispatch({ type: "update-item", item: todo });
  //       });
  //   };
  
  //   const decorationDone = {
  //     textDecoration: "line-through",
  //   };
  //   return (
  //     <div className="list-container">
  //       <p className="bold">Lista</p>
  
  //       {currentList.map((todo) => {
  //         return (
  //           <div
  //             className="list-element"
  //             key={todo.id}
  //             style={todo.completed ? decorationDone : {}}
  //           >
  //             <div>
  //               {/* <Checkbox /> */}
  //               <input
  //                 className="checkbox"
  //                 type="checkbox"
  //                 defaultChecked={todo.completed}
  //                 onChange={(event) => onChange(event, todo)}
  //               ></input>
  //               {todo.id}
  //             </div>
  //             <div className="bold">{todo.name}</div>
  //             <div>
  //               {/* <Boton /> con props */}
  //               <button className="boton-eliminar" onClick={() => onDelete(todo.id)}>Eliminar</button>
  //               <button className="boton-editar" onClick={() => onEdit(todo)}>Editar</button>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };