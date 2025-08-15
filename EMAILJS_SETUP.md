# Configuração do EmailJS para o Formulário de Contato

## Passo a Passo para Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

### 2. Configurar Serviço de Email
1. No dashboard, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail" ou "Outlook" (recomendado)
4. Conecte sua conta de email
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com as seguintes variáveis:
   ```
   Nome: {{from_name}}
   Email: {{from_email}}
   Assunto: {{subject}}
   Mensagem: {{message}}
   Timestamp: {{timestamp}}
   ```

#### Template HTML Profissional
Copie e cole o seguinte código HTML no template do EmailJS:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Contato - Portfólio Thiago Fernando Rech</title>
    <style>
        /* Reset CSS */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .header p {
            font-size: 14px;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px 20px;
        }
        
        .contact-info {
            background-color: #f8f9fa;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 25px;
            border-left: 4px solid #667eea;
        }
        
        .contact-info h2 {
            color: #667eea;
            font-size: 18px;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .info-row {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
        }
        
        .info-label {
            font-weight: 600;
            color: #555;
            min-width: 80px;
            margin-right: 10px;
        }
        
        .info-value {
            color: #333;
            flex: 1;
        }
        
        .message-section {
            background-color: #ffffff;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 25px;
        }
        
        .message-section h2 {
            color: #667eea;
            font-size: 18px;
            margin-bottom: 15px;
            font-weight: 600;
        }
        
        .message-content {
            background-color: #f8f9fa;
            border-radius: 4px;
            padding: 15px;
            border-left: 3px solid #667eea;
            font-style: italic;
            line-height: 1.7;
        }
        
        .footer {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 12px;
        }
        
        .footer p {
            margin-bottom: 5px;
        }
        
        .footer a {
            color: #667eea;
            text-decoration: none;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        .timestamp {
            background-color: #e9ecef;
            border-radius: 4px;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #6c757d;
            margin-top: 20px;
        }
        
        /* Responsive Design */
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 4px;
            }
            
            .header {
                padding: 20px 15px;
            }
            
            .header h1 {
                font-size: 20px;
            }
            
            .content {
                padding: 20px 15px;
            }
            
            .info-row {
                flex-direction: column;
                align-items: flex-start;
            }
            
            .info-label {
                min-width: auto;
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1> Novo Contato</h1>
            <p>Portfólio Thiago Fernando Rech</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Contact Information -->
            <div class="contact-info">
                <h2>👤 Informações do Contato</h2>
                <div class="info-row">
                    <span class="info-label">Nome:</span>
                    <span class="info-value">{{from_name}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">{{from_email}}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Assunto:</span>
                    <span class="info-value">{{subject}}</span>
                </div>
            </div>
            
            <!-- Message -->
            <div class="message-section">
                <h2>💬 Mensagem</h2>
                <div class="message-content">
                    {{message}}
                </div>
            </div>
            
            <!-- Timestamp -->
            <div class="timestamp">
                📅 Mensagem enviada em: {{timestamp}}
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p><strong>Thiago Fernando Rech</strong></p>
            <p>Back-End Developer | Engenheiro de Software</p>
            <p>📧 thiagorech.1997@gmail.com |  +55 (45) 99135-2082</p>
            <p>
                <a href="https://www.linkedin.com/in/thiago-fernando-rech/" target="_blank">LinkedIn</a> | 
                <a href="https://github.com/ThiagoRech1997" target="_blank">GitHub</a> | 
                <a href="http://lattes.cnpq.br/4521927510441276" target="_blank">Lattes</a>
            </p>
            <p style="margin-top: 15px; font-size: 11px; opacity: 0.8;">
                Esta mensagem foi enviada através do formulário de contato do portfólio profissional.
            </p>
        </div>
    </div>
</body>
</html>
```

4. Salve o template e anote o **Template ID**

### 4. Obter Public Key
1. Vá para "Account" → "API Keys"
2. Copie sua **Public Key**

### 5. Configurar Variáveis de Ambiente
1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione as seguintes variáveis:
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
   ```

### 6. Testar o Formulário
1. Execute `npm run dev`
2. Acesse o formulário de contato
3. Preencha e envie uma mensagem de teste
4. Verifique se o email foi recebido

## Características do Template HTML

### ✅ **Design Profissional**
- Layout moderno e limpo
- Cores consistentes com o portfólio
- Gradiente no cabeçalho
- Ícones para melhor visualização

### ✅ **Responsivo**
- Adapta-se a diferentes tamanhos de tela
- Funciona bem em dispositivos móveis
- Layout flexível

### ✅ **Informações Organizadas**
- Seção dedicada para dados do contato
- Mensagem destacada em caixa separada
- Timestamp para rastreamento
- Footer com informações profissionais

### ✅ **Compatibilidade**
- CSS inline para máxima compatibilidade
- Suporte a diferentes clientes de email
- Fallbacks para navegadores antigos

### ✅ **Variáveis do Template**
- `{{from_name}}` - Nome do remetente
- `{{from_email}}` - Email do remetente  
- `{{subject}}` - Assunto da mensagem
- `{{message}}` - Conteúdo da mensagem
- `{{timestamp}}` - Data/hora do envio (formato brasileiro: DD/MM/AAAA HH:MM:SS)

## Limites do Plano Gratuito
- 200 emails por mês
- 2 templates
- 1 serviço de email

## Alternativas ao EmailJS

### 1. SendGrid
- Mais robusto para volumes maiores
- Requer configuração de API no backend

### 2. Nodemailer (Backend)
- Implementação no servidor
- Mais controle sobre o processo

### 3. Formspree
- Serviço especializado em formulários
- Configuração mais simples

## Solução de Problemas

### Erro: "Configurações do EmailJS não encontradas"
- Verifique se o arquivo `.env.local` existe
- Confirme se as variáveis estão corretas
- Reinicie o servidor de desenvolvimento

### Erro: "Email não enviado"
- Verifique as credenciais do EmailJS
- Confirme se o template está configurado corretamente
- Verifique os logs no console do navegador 