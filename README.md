# 🇧🇷 SolidSign API - Front-end de Exemplo: eSocial (React)

## Como funciona

Este front-end é um formulário único — qualquer evento eSocial (S-1000, S-2200 etc.) é assinado com os mesmos parâmetros fixos, numa única etapa, pelo certificado e-CPF/e-CNPJ do empregador. Ele chama `POST /api/esocial/sign-evento` (`http://localhost:8080` por padrão), enviando o XML do evento e o `kmsCode`. O backend assina o documento inteiro e devolve o XML assinado.

## Requisitos

Rode o back-end de exemplo localmente:

- **Java**: [`exemplo-usecase-esocial-java`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-java)

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

Run the example backend locally:

- **Java**: [`exemplo-usecase-esocial-java`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-java)

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

Ejecute el backend de ejemplo localmente:

- **Java**: [`exemplo-usecase-esocial-java`](https://github.com/SolidTechSolutions/exemplo-usecase-esocial-java)

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abra `http://localhost:5173`, envíe el XML del evento y el `kmsCode` del empleador.
