import React, { useState } from "react";

// Quiz Data
const quizzes = {
  Phishing: {
    questions: [
      { question: "What is phishing?", options: ["A malware", "A cyber attack", "A secure website"], answer: "A cyber attack" },
      { question: "How can you recognize a phishing email?", options: ["Misspellings & urgent tone", "Official domain", "No links"], answer: "Misspellings & urgent tone" },
    ],
    article: "https://www.cisa.gov/news-events/news/phishing-attacks-explained"
  },
  Malware: {
    questions: [
      { question: "What does malware do?", options: ["Protects data", "Compromises security", "Speeds up internet"], answer: "Compromises security" },
      { question: "Which is a type of malware?", options: ["Firewall", "Trojan", "Antivirus"], answer: "Trojan" },
    ],
    article: "https://www.kaspersky.com/resource-center/threats/malware"
  },
  MITM: {
    questions: [
      { question: "What is a Man-in-the-Middle (MITM) attack?", options: ["Direct hacking", "Intercepting communication", "Safe VPN connection"], answer: "Intercepting communication" },
      { question: "How can you prevent MITM attacks?", options: ["Use public Wi-Fi", "Enable HTTPS & VPN", "Ignore software updates"], answer: "Enable HTTPS & VPN" },
    ],
    article: "https://www.cloudflare.com/learning/ssl/what-is-a-man-in-the-middle-attack/"
  }
};

function ProductsPage() {
  const [selectedQuiz, setSelectedQuiz] = useState(Object.keys(quizzes)[0]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const quizQuestions = quizzes[selectedQuiz].questions;

  // Handle Answer Selection
  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  // Next Question
  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      alert(`Quiz completed! Your score: ${score}/${quizQuestions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Cybersecurity Quizzes</h1>

      {/* Quiz Selection */}
      <div className="mb-4">
        <label className="block text-lg">Choose a topic:</label>
        <select
          className="w-full bg-gray-700 text-white p-2 rounded"
          onChange={(e) => setSelectedQuiz(e.target.value)}
          value={selectedQuiz}
        >
          {Object.keys(quizzes).map((quiz) => (
            <option key={quiz} value={quiz}>{quiz}</option>
          ))}
        </select>
      </div>

      {/* Article Link */}
      <p className="mb-4">
        <a href={quizzes[selectedQuiz].article} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          Read this article before taking the quiz
        </a>
      </p>

      {/* Quiz Question */}
      <h2 className="text-xl mb-4">{quizQuestions[currentQuestion].question}</h2>
      <div className="space-y-2">
        {quizQuestions[currentQuestion].options.map((option) => (
          <button
            key={option}
            className={`w-full px-4 py-2 rounded ${selectedAnswer === option ? "bg-blue-500" : "bg-gray-700"} hover:bg-blue-400`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Next Question */}
      <button onClick={nextQuestion} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
        Next Question
      </button>
    </div>
  );
}

export default ProductsPage;
