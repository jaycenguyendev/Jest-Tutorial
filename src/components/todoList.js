function TodoList({ todo }) {
    const { id, title, completed } = todo;
    const h1 = <h1 className="mytodo" id="h1-ne" >{title}</h1>;
    const text = completed ? <strike>{h1}</strike> : h1;

    return (
        <div id="todo" data-testid={`todo-${id}`}>
            {text}
        </div>
    );
};


export default TodoList;