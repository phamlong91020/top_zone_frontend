import { ChangeEventHandler } from 'react';

interface TodoProps {
  todo?: string;
  checked?: boolean;
  onToggle?: ChangeEventHandler<HTMLInputElement>;
  onDelete?: VoidFunction;
}

export const Todo = ({ todo, checked, onToggle, onDelete }: TodoProps) => {
  return (
    <div>
      <p>{todo}</p>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
