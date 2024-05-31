export async function POST(req, res) {
  try {
    const { email } = await req.json();
    
    console.log({ email });
  
    if (!email) {
      return new Responce(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: {'Content-Type': 'application/json'},
      });
    }
    return new Response('success', console.log(email))
  } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
  }
}