# language: pt
Funcionalidade: Gestão de tarefas
  Como usuário autenticado
  Quero criar e concluir tarefas
  Para acompanhar meu trabalho

  Cenário: Criar uma tarefa
    Dado que estou autenticado
    Quando eu adiciono a tarefa "Enviar proposta"
    Então vejo "Enviar proposta" na minha lista

  Cenário: Concluir uma tarefa
    Dado que tenho a tarefa "Enviar proposta"
    Quando eu a marco como concluída
    Então ela aparece como concluída

  Cenário: Isolamento de dados
    Dado que outro usuário possui tarefas
    Quando eu abro minha lista
    Então não vejo as tarefas do outro usuário
