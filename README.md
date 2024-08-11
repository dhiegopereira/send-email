## Envio de Email pelo Gmail com [Nodemailer](https://nodemailer.com/)

### 1. **Criar Credenciais para Uso**

- **`process.env.NODEMAILER_EMAIL`**: Seu endereço de e-mail completo do Gmail (ex: `seu-email@gmail.com`).
- **`process.env.NODEMAILER_PASSWORD`**: A senha gerada para o aplicativo.

### 2. **Gerar a Senha do Aplicativo**

Para usar o Nodemailer com o Gmail, você precisa de uma senha específica para aplicativos, especialmente se a autenticação de dois fatores estiver habilitada para sua conta do Google.

1. **Acesse a Página de Senhas de Aplicativos**:
   - Vá para [Senhas de Aplicativos](https://myaccount.google.com/apppasswords) após fazer login na sua conta Google.

2. **Selecione um Aplicativo e Dispositivo**:
   - Selecione "Selecionar um aplicativo" e escolha "Outro (nome personalizado)".
   - Digite um nome descritivo (ex: "Nodemailer") e clique em "Gerar".

3. **Copie a Senha Gerada**:
   - A senha gerada será exibida. Copie essa senha e use-a no campo `process.env.NODEMAILER_PASSWORD`.

### 3. **Verificar Configurações de Segurança do Gmail**

O Gmail pode bloquear tentativas de login de aplicativos que considera inseguros. Certifique-se de que suas configurações de segurança permitem o acesso:

1. **Verificar Configurações de Segurança**:
   - Acesse [Central de Segurança do Google](https://myaccount.google.com/security) e certifique-se de que a autenticação em dois fatores está ativada e que você está usando a senha do aplicativo gerada.

2. **Permitir Acesso de Aplicativos Menos Seguros**:
   - Embora o Gmail tenha desativado a opção "Permitir aplicativos menos seguros", a autenticação de dois fatores com senhas de aplicativos é o método recomendado. Se ainda encontrar problemas, considere usar um serviço de e-mail transacional especializado.

### 4. **Configurar Nodemailer**

Certifique-se de que você tem as variáveis de ambiente corretamente configuradas. Crie um arquivo `.env` na raiz do seu projeto e adicione:

```env
NODEMAILER_EMAIL=seu-email@gmail.com
NODEMAILER_PASSWORD=sua_senha_de_aplicativo
```

### 5. **Exemplo de Código para Enviar Email**

Aqui está um exemplo básico de como enviar e-mails usando o Nodemailer com o Gmail:

**Arquivo `emailService.ts`:**

```typescript
import nodemailer from 'nodemailer';
import { InEmail } from '../models/Email';
import { emailTemplate } from '../templates/emailTemplate';

export const send = async (inEmail: InEmail): Promise<string> => {
    const transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: inEmail.email,
        subject: inEmail.subject,
        html: emailTemplate(inEmail.message),
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return 'Email sent: ' + info.response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
```

### 6. **Testar a Conexão SMTP**

Para garantir que suas configurações estejam corretas:

- **Ferramenta de Teste SMTP**: Use ferramentas como [SMTP Test Tool](https://www.smtper.net/) para verificar se suas credenciais estão funcionando corretamente.

### 7. **Resolução de Problemas**

Se ainda tiver problemas:

- **Rever Configurações**: Certifique-se de que as configurações de segurança e a senha do aplicativo estão corretas.
- **Consultar a [Central de Ajuda do Gmail](https://support.google.com/mail/)** para informações adicionais.

---

Adicione essas instruções ao seu README para fornecer um guia claro e completo sobre como configurar e usar o Nodemailer com o Gmail.