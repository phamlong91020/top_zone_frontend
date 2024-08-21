import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Todo } from '.';
import '@testing-library/jest-dom';

describe('Todo Component', () => {
  it('todo prop should be displayed', async () => {
    render(<Todo todo="hello" />);
    expect(await screen.findByText(/hello/)).toBeInTheDocument();
  });

  it('checked prop should be applied to the checkbox', async () => {
    let todo = render(<Todo checked={true} />);
    let input = await todo.container.querySelector<HTMLInputElement>('input');
    expect(input?.checked).toBe(true);

    todo = render(<Todo checked={false} />);
    input = await todo.container.querySelector<HTMLInputElement>('input');
    expect(input?.checked).toBe(false);
  });

  it('onToggle method should be called when click the input', async () => {
    const handdleToggle = vi.fn();
    const todo = render(<Todo onToggle={handdleToggle} />);

    await todo.container
      .querySelector<HTMLButtonElement>('input[type=checkbox]')
      ?.click();
    expect(handdleToggle).toBeCalled();
  });

  it('onDelete method should be called when click the delete', async () => {
    const handleDelete = vi.fn();
    const todo = render(<Todo onDelete={handleDelete} />);

    await (await todo.findByText(/delete/i)).click();
    expect(handleDelete).toBeCalled();
  });
});
