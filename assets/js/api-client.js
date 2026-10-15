/* ElectroStore PHP API client. Uses PHP session cookies; no auth data is persisted locally. */
(() => {
  const apiUrl = `api/index.php`;
  let csrf = null;
  async function request(action, options = {}) {
    const method = options.method || 'GET';
    if (method !== 'GET' && !csrf) csrf = (await request('csrf')).data.token;
    const headers = {'Accept': 'application/json', ...(options.body ? {'Content-Type': 'application/json'} : {}), ...(method !== 'GET' ? {'X-CSRF-Token': csrf} : {})};
    const response = await fetch(`${apiUrl}?action=${encodeURIComponent(action)}${options.query ? `&${new URLSearchParams(options.query)}` : ''}`, {method, credentials: 'same-origin', headers, body: options.body ? JSON.stringify(options.body) : undefined});
    let payload; try { payload = await response.json(); } catch { throw new Error(`Backend returned HTTP ${response.status}`); }
    if (!response.ok || !payload.ok) { const error = new Error(payload.error || `Request failed (${response.status})`); error.status = response.status; throw error; }
    return payload;
  }
  window.ElectroAPI = {
    get: (action, query) => request(action, {query}),
    post: (action, body) => request(action, {method: 'POST', body}),
    setCsrf: token => { csrf = token; },
    isAuthError: error => error?.status === 401 || error?.status === 403
  };
  window.ElectroAPIReady = request('csrf').then(result => { csrf = result.data.token; return result; }).catch(() => null);
})();
