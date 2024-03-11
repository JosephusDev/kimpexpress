import express from "express"
import cors from "cors"
import veiculosRoutes from "./routes/veiculos.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/", veiculosRoutes)

app.post('/sendSMS', async (req, res) => {
    const { VONAGE_BRAND_NAME, TO_NUMBER, VONAGE_API_KEY, VONAGE_API_SECRET, UTENTE } = req.body;

    const url = 'https://rest.nexmo.com/sms/json';
    const params = `from=${VONAGE_BRAND_NAME}&text=Saudacoes Sr(a). ${UTENTE}, seu documento ja esta disponivel na plataforma Wana. Obrigado.\n&to=${TO_NUMBER}&api_key=${VONAGE_API_KEY}&api_secret=${VONAGE_API_SECRET}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
      });

      const responseData = await response.json();
      res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(8800)