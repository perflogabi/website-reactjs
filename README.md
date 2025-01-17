# Delivery Eats

## Visão Geral

Delivery Eats é uma plataforma online que permite aos usuários fazer pedidos de comida diretamente para o WhatsApp de um restaurante ou lancheria. A plataforma é projetada para ser intuitiva, fácil de usar e rápida, garantindo que os clientes possam fazer seus pedidos de forma eficiente e que os restaurantes possam recebê-los diretamente em seu WhatsApp.

## Características Principais

- **Interface Simples**: Uma interface de usuário clara e intuitiva, projetada para facilitar a navegação e o uso.
- **Catálogo de Produtos**: Exibição de burguers, pizzas e sobremesas, com descrições detalhadas, preços e imagens.
- **Integração com WhatsApp**: Os pedidos são enviados diretamente para o WhatsApp do restaurante, eliminando a necessidade de sistemas de pedidos complexos.
- **Modal de Pedidos**: Um modal interativo que permite aos usuários selecionar quantidades e visualizar detalhes dos itens antes de confirmar o pedido.

## Requisitos de Sistema

- **Navegador**: Suporte para os principais navegadores modernos (Chrome, Firefox, Safari, Edge).
- **Backend**: Necessário um servidor para hospedar a aplicação web e integrações com APIs de terceiros, se necessário.
- **WhatsApp**: Conta de WhatsApp Business para receber pedidos diretamente.

## Instalação e Configuração

### Clonar o Repositório:

```bash
git clone https://github.com/seuusuario/delivery-eats.git
```

cd delivery-eats
Instalar Dependências:
Certifique-se de ter o Node.js instalado. Em seguida, execute:

```bash
npm install
```

Configurar o Ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```bash
REACT_APP_WHATSAPP_NUMBER=seu-numero-de-whatsapp
```

Iniciar o Servidor de Desenvolvimento:

```bash
npm start
```

O projeto estará disponível em http://localhost:3000.

# Uso da Plataforma

- Navegar pelo Catálogo:
  Os usuários podem navegar pelas categorias de produtos, como burguers, pizzas e sobremesas. Cada categoria apresenta uma lista de itens com imagens, descrições e preços.

- Selecionar Produtos:
  Ao clicar em uma categoria, o usuário pode visualizar todas as opções disponíveis. O usuário pode clicar em "Peça Agora" para abrir o modal de detalhes do produto.

- Adicionar ao Carrinho:
  No modal de detalhes, o usuário pode ajustar a quantidade e confirmar a seleção. Os itens são então preparados para envio.

- Enviar Pedido pelo WhatsApp:
  Ao confirmar o pedido, um link é gerado automaticamente e direciona o usuário para o WhatsApp com uma mensagem predefinida contendo os detalhes do pedido. O usuário pode revisar e enviar o pedido diretamente para o restaurante.

# Personalização

- Configuração de Produtos: Os produtos podem ser configurados no arquivo de configuração ou integrados com um banco de dados para gerência dinâmica.
- Temas e Estilos: Personalize o tema e os estilos modificando os arquivos CSS ou utilizando um framework de estilos como Tailwind CSS.

**Dicas para Uso Eficiente**

- Teste de Integração com WhatsApp: Certifique-se de testar a integração com diferentes dispositivos para garantir que o link de pedido funcione corretamente em todos.

**Manutenção Regular:** Mantenha o catálogo de produtos atualizado e revise regularmente as mensagens de erro ou problemas relatados pelos usuários.
Suporte e Contribuição

**Problemas:** Se encontrar problemas, abra uma issue no GitHub.
Contribuições: Pull requests são bem-vindos. Por favor, siga as diretrizes de contribuição fornecidas no repositório.

**Licença**
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
