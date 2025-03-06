import React, { useState } from "react";
import axios from "axios";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askAI = async () => {
    if (!question.trim()) {
      setError("Please enter a question!");
      return;
    }

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await axios.post(
        "https://python-ai-tutor-backend.onrender.com/ask-ai",
        { message: question },
        {
          headers: { "Content-Type": "application/json" }, 
        }
      );

      console.log("Full API Response:", response.data); 

      // Ensure correct field is accessed
      if (response.data && response.data.answer) {
        const aiResponse = response.data.answer.replace(/\n/g, "<br />");
        setAnswer(aiResponse);
      } else {
        setAnswer("No valid response from AI.");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to fetch response. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Ask AI</h1>
        
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        
        <button
          className="w-full bg-blue-600 text-white p-3 mt-4 rounded-lg hover:bg-blue-700 transition"
          onClick={askAI}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {error && <p className="text-red-500 mt-3">{error}</p>}

        {answer && (
          <div className="mt-4 p-4 bg-gray-200 rounded-lg">
            <h2 className="font-semibold">AI Answer:</h2>
            {/* Render formatted AI response */}
            <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAI;
