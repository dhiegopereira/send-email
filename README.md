## Envio de email pelo Gmail com [Nodemailer](https://nodemailer.com/)

### 1. **Criar as Credenciais para uso**

- **`process.env.NODEMAILER_EMAIL`**: Deve ser o endereço de e-mail completo (ex: `seu-email@gmail.com`).
- **`process.env.NODEMAILER_PASSWORD`**: Deve ser a senha de aplicativo que você gerou.

### 2. **Gerando a Senha de Aplicativo**

1. Vá para [Senhas de Aplicativos](https://myaccount.google.com/apppasswords).
2. Selecione um aplicativo e um dispositivo (ou use "Outro" para criar uma senha personalizada).
3. Gere a senha e use essa senha no lugar da senha da conta no `process.env.NODEMAILER_PASSWORD`.

### 3. **Verifique Configurações de Segurança do Gmail**

O Gmail pode bloquear tentativas de login de aplicativos que considera inseguros. Certifique-se de que a configuração de segurança está configurada para permitir o acesso. Se necessário, acesse a [Central de Ajuda do Gmail](https://support.google.com/mail/) para mais informações.

### 4. **Testar a Conexão SMTP**

Para garantir que você está usando as configurações corretas, você pode testar a conexão SMTP usando ferramentas de teste como o [SMTP Test Tool](https://www.smtper.net/) para verificar se suas credenciais estão funcionando.

Se você seguir esses passos e ainda tiver problemas, pode ser útil tentar um cliente de e-mail diferente ou usar um serviço de e-mail transacional especializado que oferece suporte mais robusto para envio de e-mails.