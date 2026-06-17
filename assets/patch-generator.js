// ============================================================
// ZAMIEŃ tę funkcję w autoflow-website.html
// Znajdź: async function generateOffer()
// Zastąp całą funkcję poniższym kodem
// ============================================================

// KROK 1: Wstaw swój URL webhooka z n8n
// Format: https://TWOJA-DOMENA.n8n.cloud/webhook/generator-ofert
// lub:    https://twoj-vps.pl:5678/webhook/generator-ofert
const N8N_WEBHOOK_URL = 'https://TWOJA-DOMENA.n8n.cloud/webhook/generator-ofert';

async function generateOffer() {
  const platform  = document.getElementById('platform').value;
  const orders    = document.getElementById('orders').value;
  const industry  = document.getElementById('industry').value;
  const tools     = document.getElementById('tools').value;
  const extra     = document.getElementById('extra').value;
  const processes = [...document.querySelectorAll('input[name="process"]:checked')]
                      .map(c => c.value);

  if (!platform || !orders || processes.length === 0) {
    showToast('⚠️ Wybierz platformę, liczbę zamówień i minimum 1 proces');
    return;
  }

  const btn = document.getElementById('genBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Generuję ofertę AI...';

  try {
    const res = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ platform, orders, industry, tools, extra, processes })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error || 'Nieznany błąd');
    }

    document.getElementById('offerTitle').textContent = `Oferta automatyzacji — ${platform}`;
    document.getElementById('offerDate').textContent   = new Date().toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('offerPrice').textContent  = data.price;
    document.getElementById('offerBody').textContent   = data.text;

    const result = document.getElementById('offerResult');
    result.classList.add('visible');
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  } catch (err) {
    console.error('Generator error:', err);
    showToast('❌ ' + (err.message || 'Błąd generowania. Spróbuj ponownie.'));
  }

  btn.disabled = false;
  btn.innerHTML = '✦ Wygeneruj nową ofertę';
}
