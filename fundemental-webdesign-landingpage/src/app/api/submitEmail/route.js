export async function POST(req) {
    const { email } = await req.json();
    console.log({ email });
  
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: {'Content-Type': 'application/json'},
      });
    };

    try {
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const DATACENTER = process.env.MAILCHIMP_API_SERVER;
      const data = {
        email_address: email,
        status: 'subscribed',
      };

      const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        {
          body: JSON.stringify(data),
          headers: {
            Authorization: `apikey ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );

      if (response.status >= 400) {
        const errorData = await response.json();
        return new Response(JSON.stringify({error: errorData.detail ||
            `There was an error submitting your info. Please reach out 
            at gbentley0618@gmail.com and will respond as soon as possible.`}), {
            status: 400,
            headers: { 'Content-Type': 'application/json'},
            });
        } else {

        return new Response(JSON.stringify({ message: 'Email submitted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    };
};