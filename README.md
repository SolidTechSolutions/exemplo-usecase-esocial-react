# 🇧🇷 SolidSign API - Front-end de Exemplo: eSocial (React)

## Como funciona

Este front-end é um formulário único — qualquer evento eSocial (S-1000, S-2200 etc.) é assinado com os mesmos parâmetros fixos, numa única etapa, pelo certificado e-CPF/e-CNPJ do empregador. Ele chama `POST /api/esocial/sign-evento` (`http://localhost:8080` por padrão), enviando o XML do evento e o `kmsCode`. O backend assina o documento inteiro e devolve o XML assinado.

## Requisitos

Rode **um** destes back-ends de exemplo localmente (portas diferentes — se não usar o Java, ajuste `BACKEND_URL` em `src/App.jsx` pra apontar pra porta certa):

- **Java** (porta 8080): [`exemplo-usecase-esocial-java`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-java)
- **C#** (porta 5097): [`exemplo-usecase-esocial-csharp`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-csharp)
- **JavaScript** (porta 8102): [`exemplo-usecase-esocial-javascript`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-javascript)
- **TypeScript** (porta 8103): [`exemplo-usecase-esocial-typescript`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-typescript)
- **Node.js** (porta 3097): [`exemplo-usecase-esocial-nodejs`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-nodejs)
- **PHP** (porta 8104): [`exemplo-usecase-esocial-php`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-php)
- **Python** (porta 8105): [`exemplo-usecase-esocial-python`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-python)

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`, envie o XML do evento e o `kmsCode` do empregador.

---

# 🇬🇧 SolidSign API - Example Front-end: eSocial (React)

## How it works

This front-end is a single form — any eSocial event (S-1000, S-2200, etc.) is signed with the same fixed parameters, in a single step, using the employer's e-CPF/e-CNPJ certificate. It calls `POST /api/esocial/sign-evento` (`http://localhost:8080` by default), sending the event XML and the `kmsCode`. The backend signs the entire document and returns the signed XML.

## Requirements

Run **one** of these example backends locally (different ports — if not using Java, adjust `BACKEND_URL` in `src/App.jsx` to point to the right port):

- **Java** (port 8080): [`exemplo-usecase-esocial-java`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-java)
- **C#** (port 5097): [`exemplo-usecase-esocial-csharp`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-csharp)
- **JavaScript** (port 8102): [`exemplo-usecase-esocial-javascript`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-javascript)
- **TypeScript** (port 8103): [`exemplo-usecase-esocial-typescript`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-typescript)
- **Node.js** (port 3097): [`exemplo-usecase-esocial-nodejs`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-nodejs)
- **PHP** (port 8104): [`exemplo-usecase-esocial-php`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-php)
- **Python** (port 8105): [`exemplo-usecase-esocial-python`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-python)

## Running

```bash
npm install
npm run dev
```

Open `http://localhost:5173`, submit the event XML and the employer's `kmsCode`.

---

# 🇪🇸 SolidSign API - Front-end de Ejemplo: eSocial (React)

## Cómo funciona

Este front-end es un formulario único — cualquier evento eSocial se firma con los mismos parámetros fijos, en una única etapa, con el certificado e-CPF/e-CNPJ del empleador. Llama a `POST /api/esocial/sign-evento` (`http://localhost:8080` por defecto), enviando el XML del evento y el `kmsCode`. El backend firma el documento entero y devuelve el XML firmado.

## Requisitos

Ejecute **uno** de estos backends de ejemplo localmente (puertos diferentes — si no usa Java, ajuste `BACKEND_URL` en `src/App.jsx` para apuntar al puerto correcto):

- **Java** (puerto 8080): [`exemplo-usecase-esocial-java`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-java)
- **C#** (puerto 5097): [`exemplo-usecase-esocial-csharp`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-csharp)
- **JavaScript** (puerto 8102): [`exemplo-usecase-esocial-javascript`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-javascript)
- **TypeScript** (puerto 8103): [`exemplo-usecase-esocial-typescript`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-typescript)
- **Node.js** (puerto 3097): [`exemplo-usecase-esocial-nodejs`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-nodejs)
- **PHP** (puerto 8104): [`exemplo-usecase-esocial-php`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-php)
- **Python** (puerto 8105): [`exemplo-usecase-esocial-python`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-python)

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`, envíe el XML del evento y el `kmsCode` del empleador.
