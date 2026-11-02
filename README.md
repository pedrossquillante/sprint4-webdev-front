# 1 - Tecnologias utilizadas

React - Forneceu um conjunto de ferramentas e bibliotecas
Next.js - Utilizado no desenvolvimento, pois traz uma estrutura de produção já pronta.
Git/GitHub - Para versionamento do projeto.
ESlint - Para garantir uma escrita padronizada.
Tailwindcss - Para acelerar a construção da estilização.
Babel plugin react compiler - Automatiza a memoização do código.

# 2 - Pré-requisitos

Antes de instalar e executar o projeto, certifique-se de ter os seguintes 
itens instalados na sua máquina:

- Node.js e npm — necessários para instalar as dependências e rodar o 
  projeto (baixar em: nodejs.org)
- Git — necessário apenas se for clonar o projeto via repositório 
  GitHub (não é necessário para quem for usar o arquivo .zip)
- VS Code (opcional) — editor recomendado, mas qualquer editor ou 
  terminal nativo do sistema também funciona

# 3 - Como instalar as dependências

## Via Repositório Github

**Se tiver baixado o arquivo ZIP através do repositório do Github siga os passos do tópico "Via arquivo ZIP"**

1. Clone o repositório:
   git clone *(url do Github)*

2. Abra a pasta clonada em um editor ou terminal:

   Opção 1 - VS Code:
   - Abra o VS Code > Arquivo > Abrir Pasta > selecione a pasta clonada 
   - Terminal > Novo Terminal
   - Escolha a opção do terminal >bash<
   - digite: cd <nome-da-pasta-do-projeto> (Entra na pasta que o Git acabou de criar)
   - digite: npm install (Instala todas as dependências necessárias)
   - digite: code . (Abre o projeto no VS Code)

   Opção 2 - Terminal nativo do sistema:
   - Abra o terminal do seu sistema operacional
   - Navegue até a pasta: cd caminho/da/pasta/clonada
   - digite: npm install (Instala todas as dependências necessárias)

## Via arquivo ZIP

1. Extraia o arquivo .zip em uma pasta de sua escolha

2. Abra a pasta extraída em um editor ou terminal:

   Opção 1 - VS Code:
   - Abra o VS Code > Arquivo > Abrir Pasta > selecione a pasta extraída
   - Terminal > Novo Terminal
   - Escolha a opção do terminal >bash<
   - digite: npm install (Instala todas as dependências necessárias)

   Opção 2 - Terminal nativo do sistema:
   - Abra o terminal do seu sistema operacional
   - Navegue até a pasta: cd caminho/da/pasta/extraida
   - digite: npm install (Instala todas as dependências necessárias)
  
# 4 - Como executar o projeto

1. Certifique-se de que as dependências já foram instaladas em
   [como instalar as dependências](#2---como-instalar-as-dependências) 

2. No terminal, dentro da pasta do projeto (no VSCODE ou no terminal do sistema operacional), na branch `Main` execute:
   npm run dev

3. Acesse no navegador:
   http://localhost:3000


# 5 - Onde e como foi utilizada a IA nesse projeto

## Pedro

Utilizei a IA principalmente como apoio na organização do código, com orientações sobre a estrutura de pastas, a divisão em componentes e a separação dos arquivos do projeto. Isso me ajudou a entender melhor como deixar tudo mais limpo e fácil de manter, algo em que eu ainda tinha dúvidas. Também recorri a ela no desenvolvimento da funcionalidade da galeria, onde fui auxiliado a construir um carrossel em React para implementá-la no projeto. Nesse processo, não me limitei a copiar o que foi sugerido: procurei entender a lógica por trás do carrossel, como o controle do slide atual e a navegação entre as imagens, e fiz os ajustes necessários para que ele funcionasse bem no meu projeto. Dessa forma, a IA funcionou como uma ferramenta de apoio e aprendizado, e as decisões finais e a integração do código foram feitas por mim.

## Thiago

A IA me auxiliou na Análise do código ao longo de todo o projeto, verificando a estrutura do código e me apontando erros ou possiveis melhorias, na conversão do projeto de CSS para TailwindCSS me deu suporte com a sintaxe na escrita do código, e no planejamento para melhorias com foco em contraste, acessibilidade e responsividade da Landing Page.

# 6 - Link do Deploy na Vercel

https://sprint4-webdev-front.vercel.app/

# 7 - Link do Projeto no Github

https://github.com/pedrossquillante/sprint4-webdev-front

# 8 - O que mudou na Landing Page da JOVI?

- Modo Escuro automático (de acordo com o navegador do usuário)

- Contraste otimizado

- Ampliação no uso na navegação por teclado e link

- Nomes acessíveis corretos e mensagens anunciadas ao leitor de tela

- Respeito à preferência por movimento reduzido

O foco das mudanças estão em melhorias no contraste, acessibilidade e manter a responsividade eficiente.