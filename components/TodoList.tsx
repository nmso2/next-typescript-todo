const TodoList = ({
  items,
  onRemoveTodo,
}: {
  items: any;
  onRemoveTodo: any;
}) => {
  const onClick = (text: string): void => alert(text);
  return (
    <div>
      {items?.map(
        (item: Object, index: any) => (
          <li key={index} onClick={() => onClick(item.text)}>
            {item.text}
            <button onClick={() => onRemoveTodo(item.id)}>Remove</button>
          </li>
        )
        // console.log(data.text)
      )}
    </div>
  );
};

export default TodoList;
