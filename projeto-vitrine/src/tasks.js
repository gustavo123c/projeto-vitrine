export function addTask(tasks, title) {
  const clean = String(title ?? '').trim();
  if (!clean || clean.length > 200) throw new Error('Título inválido');
  return [...tasks, { id: crypto.randomUUID(), title: clean, done: false }];
}

export function toggleTask(tasks, id) {
  return tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}
