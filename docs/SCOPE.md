S.C.O.P.E. - ESCOLA ONLINE
Projeto: Sistema de Gestao Escolar (Front-end apenas)

S - SITUACAO / CONTEXTO
Desenvolver uma aplicacao web responsiva para uma escola, permitindo que o administrador gerencie alunos, disciplinas e medias, enquanto os alunos consultam suas proprias notas em um boletim.
A aplicacao sera somente front-end. Nao implementar backend, API, banco de dados remoto ou autenticacao real. Os dados devem ser persistidos no LocalStorage do navegador.
Tecnologias obrigatorias:
- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- LocalStorage para persistencia local

C - CLIENTES / USUARIOS
1. Administrador:
   - Acessa a area administrativa.
   - Gerencia alunos, disciplinas e medias.
   - Pode criar, visualizar, editar e excluir registros.
2. Aluno:
   - Acessa sua area de aluno.
   - Consulta seu boletim e suas medias por disciplina.
   - Nao pode editar notas, alunos ou disciplinas.

O - OBJETIVOS
- Criar uma interface clara, intuitiva e responsiva.
- Implementar as operacoes CRUD de alunos, disciplinas e medias.
- Exibir medias e situacoes escolares por disciplina.
- Permitir consulta individual do boletim do aluno.
- Manter os dados salvos no navegador usando LocalStorage.
- Disponibilizar uma pagina de identificacao da equipe.

P - REQUISITOS / FUNCIONALIDADES

1. Acesso e navegacao
- Criar uma tela inicial com identificacao do sistema e opcoes de acesso: Administrador e Aluno.
- Implementar controle de acesso visual com validacao no front-end.
- Criar navegacao entre as paginas conforme o perfil selecionado.
- Como nao existe backend, deixar claro que o acesso e demonstrativo e nao representa seguranca real.
- Criar opcao para sair e retornar a tela inicial.

2. Area do administrador
- Criar um painel administrativo com resumo dos alunos, disciplinas e medias cadastradas.
- Criar gerenciamento de alunos com CRUD:
  - Cadastrar aluno.
  - Listar alunos.
  - Editar dados do aluno.
  - Excluir aluno com confirmacao.
- Criar gerenciamento de disciplinas com CRUD:
  - Cadastrar disciplina.
  - Listar disciplinas.
  - Editar disciplina.
  - Excluir disciplina com confirmacao.
- Criar gerenciamento de medias:
  - Selecionar aluno e disciplina.
  - Informar ou editar a media.
  - Excluir uma media cadastrada.
  - Validar valores numericos entre 0 e 10.
  - Permitir media nula, representada como "Sem nota" ou "Nao lancada".
- Exibir a situacao escolar da media de cada disciplina.

3. Area do aluno / boletim
- Permitir selecionar ou identificar um aluno de demonstracao.
- Exibir nome do aluno e lista de disciplinas.
- Exibir a media de cada disciplina.
- Quando a media for nula, exibir "Sem nota".
- Exibir a situacao de cada disciplina.
- O aluno deve consultar somente o boletim associado ao seu perfil selecionado.
- Nao disponibilizar controles de edicao para o aluno.

4. Regras de media e situacao
- As medias devem aceitar valores de 0 a 10.
- Uma media ainda nao informada deve ser armazenada como null, e nao como zero.
- Calcular e exibir a situacao conforme as regras:
  - Media menor que 5: Reprovado.
  - Media maior ou igual a 6 e menor que 7: Recuperacao.
  - Media maior ou igual a 7: Aprovado.
  - Media nula: Sem nota.
- A especificacao original nao define a situacao para medias de 5,0 ate valores menores que 6,0. Nao inventar uma regra definitiva: destacar esse intervalo na interface como "Situacao nao definida" ate que a regra seja confirmada.
- Calcular a media geral do aluno somente com medias numericas cadastradas. Se nao houver nenhuma media numerica, exibir "Sem media geral".

5. Dados iniciais / mock
- Criar uma lista mockada com 10 alunos.
- Criar algumas disciplinas iniciais para demonstracao.
- Inicializar as medias dos alunos como null, quando ainda nao houver nota.
- Usar dados de exemplo coerentes e editaveis.
- Na primeira abertura, carregar os dados mockados.
- Nas proximas aberturas, carregar os dados salvos no LocalStorage.
- Disponibilizar uma opcao para restaurar os dados de demonstracao, com confirmacao.

6. Persistencia
- Persistir alunos, disciplinas e medias no LocalStorage.
- Atualizar o LocalStorage sempre que houver criacao, edicao ou exclusao.
- Tratar falhas ou dados invalidos no LocalStorage sem quebrar a interface.
- Nao utilizar banco de dados, servidor ou API.

7. Validacoes
- Campos obrigatorios devem ser validados.
- Impedir cadastro de aluno ou disciplina com campos obrigatorios vazios.
- Validar media como numero entre 0 e 10.
- Evitar registros duplicados quando houver identificador unico.
- Exibir mensagens de erro e sucesso claras.
- Confirmar exclusoes antes de executar.
- Usar identificadores unicos para alunos, disciplinas e lancamentos de medias.

8. Pagina de identificacao da equipe
- Criar uma pagina ou secao "Equipe".
- Permitir apresentar ate 5 integrantes.
- Exibir nome de cada integrante.
- Manter o visual consistente com o restante do sistema.

9. Responsividade
- Desenvolver layout adaptavel para computador, tablet e celular.
- Em telas grandes, usar sidebar ou navegacao lateral quando apropriado.
- Em telas pequenas, transformar a navegacao em menu compacto.
- Adaptar tabelas para telas pequenas, usando rolagem horizontal ou cards.
- Garantir que formularios, botoes, modais e textos nao ultrapassem a largura da tela.
- Usar espacamentos e tamanhos de fonte adequados para cada dispositivo.
- Testar visualmente nos breakpoints mobile, tablet e desktop.

E - EXPERIENCIA / DESIGN E ENTREGA

1. Direcao visual
- Criar uma interface moderna, escolar, organizada e profissional.
- Usar hierarquia visual clara entre titulos, conteudos, formularios e acoes.
- Manter cores, espacamentos, bordas e componentes consistentes.
- Usar estados visuais para carregamento, lista vazia, erro, sucesso e confirmacao.
- Evitar excesso de elementos decorativos.
- Garantir contraste adequado e acessibilidade basica.

2. Paginas sugeridas
- / : Tela inicial e escolha de perfil.
- /admin : Painel administrativo.
- /admin/alunos : CRUD de alunos.
- /admin/disciplinas : CRUD de disciplinas.
- /admin/medias : Lancamento e gerenciamento de medias.
- /aluno : Selecao ou area do aluno.
- /aluno/boletim : Boletim individual.
- /equipe : Identificacao da equipe.
As rotas podem ser ajustadas conforme a organizacao do projeto, mantendo todas as funcionalidades.

3. Componentes sugeridos
- Header.
- Sidebar ou menu responsivo.
- Cards de resumo.
- Tabela ou lista responsiva.
- Formularios de cadastro e edicao.
- Modal de confirmacao.
- Alertas de sucesso e erro.
- Badge de situacao escolar.
- Seletor de aluno e disciplina.
- Estado de lista vazia.

4. Organizacao tecnica
- Utilizar TypeScript com tipos/interfaces para Aluno, Disciplina e Media.
- Separar componentes reutilizaveis das paginas.
- Centralizar funcoes de leitura e escrita no LocalStorage.
- Evitar duplicacao de regras de calculo.
- Usar componentes client-side quando houver estado, eventos ou acesso ao LocalStorage.
- Nao acessar LocalStorage diretamente durante a renderizacao no servidor.
- Manter o codigo organizado, legivel e simples de manter.
- Nao substituir ou apagar codigo existente sem necessidade; integrar as funcionalidades ao projeto atual.

5. Criterios de aceite
- O projeto executa localmente com Next.js.
- A interface utiliza Tailwind CSS e TypeScript.
- O administrador consegue criar, listar, editar e excluir alunos.
- O administrador consegue criar, listar, editar e excluir disciplinas.
- O administrador consegue lancar, editar e excluir medias.
- O aluno consegue consultar seu boletim sem editar dados.
- Medias nulas aparecem como "Sem nota".
- As situacoes seguem as regras fornecidas, sinalizando a faixa nao especificada de 5,0 a menos de 6,0.
- Existem 10 alunos mockados na primeira inicializacao.
- As alteracoes continuam disponiveis apos atualizar a pagina, por meio do LocalStorage.
- A pagina da equipe permite apresentar ate 5 integrantes.
- O layout funciona em computador, tablet e celular.
- Formularios possuem validacao e exclusoes possuem confirmacao.
- A aplicacao e exclusivamente front-end, sem backend ou API.

6. Limites do projeto
- Nao implementar autenticacao real.
- Nao implementar backend, banco de dados remoto ou API.
- Nao implementar envio de email ou notificacoes.
- Nao implementar integracao com sistemas escolares externos.
- Nao tratar o LocalStorage como armazenamento seguro.
- O projeto e uma demonstracao front-end com dados locais.

7. Pontuacao
- A avaliacao informada vai de 0 a 10 pontos.
- Priorizar o cumprimento dos requisitos funcionais, regras de media, persistencia local, responsividade e organizacao visual.