import { describe, it, expect } from 'vitest';
import { addTask, toggleTask } from '../src/tasks.js';

describe('tasks', () => {
  it('adiciona tarefa válida', () => {
    expect(addTask([], 'Enviar proposta')).toHaveLength(1);
  });
  it('rejeita título vazio', () => {
    expect(() => addTask([], '   ')).toThrow();
  });
  it('alterna conclusão', () => {
    const [t] = addTask([], 'A');
    expect(toggleTask([t], t.id)[0].done).toBe(true);
  });
});
