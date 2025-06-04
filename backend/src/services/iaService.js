import axios from "axios";

export const getIAResponse = async (userInput) => {
  try {
    const response = await axios.post(
      "http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse",
      {
        input: userInput,
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error al obtener la respuesta de la IA:", error);
    return;
  }
};
