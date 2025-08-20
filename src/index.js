export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === 'GET' && url.pathname === '/api/comments') {
      const pageKey = url.searchParams.get('page_key') || 'default';
      const comments = await env.COMMENTS.get(pageKey);
      
      return new Response(comments || '[]', {
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    if (request.method === 'POST' && url.pathname === '/api/comments') {
      const data = await request.json();
      const pageKey = data.page_key || 'default';
      
      const existingComments = JSON.parse(await env.COMMENTS.get(pageKey) || '[]');
      
      const newComment = {
        id: Date.now(),
        content: data.content,
        nick: data.nick || '匿名',
        date: new Date().toISOString(),
        page_key: pageKey
      };
      
      existingComments.push(newComment);
      await env.COMMENTS.put(pageKey, JSON.stringify(existingComments));
      
      return new Response(JSON.stringify(newComment), {
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    return new Response('Artalk Comments API with KV', { headers: corsHeaders });
  },
};

