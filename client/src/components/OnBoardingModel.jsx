import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faAppleAlt, faBrain } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

// Function to generate a random color
const generateRandomColor = () => {
  const colors = [
    'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-yellow-400',
    'bg-pink-400', 'bg-red-400', 'bg-teal-400', 'bg-indigo-400'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

// Function to get the text color based on the background
const getTextColor = (bgColor) => {
  switch (bgColor) {
    case 'bg-blue-400':
    case 'bg-green-400':
    case 'bg-teal-400':
    case 'bg-purple-400':
    case 'bg-indigo-400':
    case 'bg-red-400':
      return 'text-white';
    case 'bg-yellow-400':
    case 'bg-pink-400':
      return 'text-gray-800';
    default:
      return 'text-white';
  }
};

const OnBoardingModal = ({ isOpen, onClose }) => {
  const [colors, setColors] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Store answers
  const { user } = useUser();
  const userId = user ? String(user.id) : null;

  // Generate unique colors for the options whenever the question changes
  useEffect(() => {
    const uniqueColors = [];
    while (uniqueColors.length < 4) {
      const color = generateRandomColor();
      if (!uniqueColors.includes(color)) {
        uniqueColors.push(color);
      }
    }
    setColors(uniqueColors);
  }, [currentQuestion]);

  // Questions for the onboarding process
  const questions = [
    {
      question: "What’s your **Super Cool** goal for building new habits?",
      options: [
        { icon: faRunning, label: "🏃‍♂️ Get Super Fit!" },
        { icon: faAppleAlt, label: "🍏 Eat Like a Champion!" },
        { icon: faBrain, label: "🧠 Get Brainy & Brilliant!" },
        { icon: faRunning, label: "📚 Learn Some Awesome Stuff!" },
      ]
    },
    {
      question: "How would you describe your current fitness level?",
      options: [
        { icon: faRunning, label: "I’m just getting started!" },
        { icon: faAppleAlt, label: "I’m moderately fit!" },
        { icon: faBrain, label: "I’m pretty advanced!" },
        { icon: faRunning, label: "I’m an expert!" },
      ]
    },
    {
      question: "What’s your preferred type of activity?",
      options: [
        { icon: faRunning, label: "Running or Jogging" },
        { icon: faAppleAlt, label: "Yoga or Stretching" },
        { icon: faBrain, label: "Mental Exercises" },
        { icon: faRunning, label: "Strength Training" },
      ]
    }
  ];

  const handleNext = (selectedAnswer) => {
    const currentQuestionData = questions[currentQuestion];
    
    // Append the new answer to the answers array
    const updatedAnswers = [...answers, { question: currentQuestionData.question, answer: selectedAnswer }];
    
    setAnswers(updatedAnswers); // Update the state
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Send the answers to the backend when the user finishes the last question
      if (userId) {
        axios.post('http://localhost:5000/api/onboarding', { userId, answers: updatedAnswers }) // Send updated answers
          .then(response => {
            console.log('Onboarding data stored:', response.data);
            onClose(); // Close the modal after data is submitted
          })
          .catch(error => {
            console.error('Error storing onboarding data:', error);
          });
      } else {
        onClose(); // Close the modal if no userId is found
      }
    }
  };
  
  
  
  

  if (!isOpen) return null;

  const currentQ = questions[currentQuestion];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-pink-500">
          🎉 Welcome to Your Habit Journey! 🎉
        </h2>

        <p className="text-2xl mb-6 text-gray-800 text-center">
          {currentQ.question}
        </p>

        {/* Display options for the current question */}
        <div className="grid grid-cols-2 gap-6">
          {colors.map((color, index) => {
            const textColor = getTextColor(color);
            const option = currentQ.options[index];

            return (
              <div
                key={index}
                className={`flex items-center justify-center ${color} p-6 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer`}
                onClick={() => handleNext(option.label)} // Pass the selected answer
              >
                <FontAwesomeIcon icon={option.icon} className={`text-6xl mr-4 ${textColor}`} />
                <span className={`font-bold text-xl ${textColor}`}>
                  {option.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-8">
          <button
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-pink-600 transition-all duration-300"
            onClick={() => handleNext('Skipped')} // Handle skipped questions
          >
            {currentQuestion === questions.length - 1 ? '🚀 Let’s Go!' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingModal;
