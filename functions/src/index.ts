/* eslint-disable */
import * as functions from "firebase-functions";
import axios from "axios";

// Define the OpenAI API key from environment variables
const OPENAI_API_KEY = functions.config().openai.key;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

// Firebase function to post to ChatGPT API
export const getChatGPTResponse = functions.https.onRequest(async (req, res) => {
  try {
    // Check if the request method is POST
    if (req.method !== "POST") {
      res.status(405).send({message: "Only POST requests are allowed"});
      return;
    }

    const {prompt} = req.body;

    if (!prompt) {
      res.status(400).send({message: "Prompt is required"});
      return;
    }

    // Set up the request body for ChatGPT
    const requestBody = {
      model: "gpt-3.5-turbo", // Specify the model you want to use
      messages: [{role: "user", content: prompt}],
    };

    // Make a POST request to the OpenAI API
    const response = await axios.post(
      OPENAI_API_URL,
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    // Send the response back to the client
    res.status(200).send({
      success: true,
      data: response.data.choices[0].message.content,
    });

    return;
  } catch (error: any) {
    console.error("Error communicating with OpenAI API:", error);

    // Safely access the error message
    res.status(500).send({
      success: false,
      message: "Failed to get response from ChatGPT",
      error: error.message || "An unknown error occurred",
    });

    return;
  }
});
