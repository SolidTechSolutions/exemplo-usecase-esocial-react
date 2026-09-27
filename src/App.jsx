import { useState } from 'react';
import './App.css';

// [PT-BR] Front-end de exemplo para o caso de uso "eSocial": um formulário único, já que
// qualquer evento (S-1000, S-2200 etc.) é assinado com os mesmos parâmetros fixos, numa
// única etapa, pelo certificado e-CPF/e-CNPJ do empregador.
//
// [EN] Example front-end for the "eSocial" use case: a single form, since any event
// (S-1000, S-2200, etc.) is signed with the same fixed parameters, in a single step, using
// the employer's e-CPF/e-CNPJ certificate.

const BACKEND_URL = 'http://localhost:8080/api/esocial/sign-evento';

export default function App() {
  const [document, setDocument] = useState(null);
  const [kmsCode, setKmsCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!document) { setError('Selecione o XML do evento eSocial.'); return; }
    if (!kmsCode.trim()) { setError('Informe o kmsCode do empregador.'); return; }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append('document', document);
      fd.append('kmsCode', kmsCode.trim());

      const res = await fetch(BACKEND_URL, { method: 'POST', body: fd });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        let msg = text;
        try { msg = JSON.parse(text)?.message || text; } catch { /* keep raw text */ }
        setError(msg || `Erro HTTP ${res.status}`);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setResult({ url, name: 'evento_esocial_signed.xml' });
    } catch (err) {
      setError(`Falha ao chamar o backend de exemplo em ${BACKEND_URL} — ele está rodando? (${err.message})`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>eSocial — assinatura de evento (exemplo React)</h1>
      <p className="subtitle">
        Front-end de exemplo para o back-end <code>exemplo-usecase-esocial-java</code>.
        Funciona pra qualquer evento (S-1000, S-2200…) — os parâmetros de assinatura são
        sempre os mesmos, então não há seletor de tipo de evento.
      </p>

      <form onSubmit={submit} className="form">
        <fieldset>
          <legend>Evento eSocial</legend>
          <label>XML do evento
            <input type="file" accept=".xml,text/xml,application/xml" onChange={(e) => setDocument(e.target.files[0] || null)} />
          </label>
          <label>kmsCode do empregador
            <input value={kmsCode} onChange={(e) => setKmsCode(e.target.value)} placeholder="uuid-do-certificado-kms" />
          </label>
        </fieldset>

        <button type="submit" disabled={loading}>{loading ? 'Assinando…' : 'ASSINAR EVENTO'}</button>
      </form>

      {error && <div className="box error">{error}</div>}

      {result && (
        <div className="box success">
          <h3>Sucesso!</h3>
          <a href={result.url} download={result.name} className="download-btn">Baixar XML assinado</a>
        </div>
      )}
    </div>
  );
}
