A smart fitness application that uses Artificial Intelligence to generate personalized workouts, meal plans, and health recommendations.

Backend developed in Python (Flask) with integration of Groq LLaMA 3 model for fast and intelligent AI predictions.

Includes an /api/predict endpoint that accepts user prompts and returns AI-generated fitness, diet, and workout guidance.

Features a robust backend architecture with:

Environment-based configuration (.env)

Error handling for timeouts, invalid inputs, and API failures

Logging for better debugging and monitoring

CORS support for smooth communication with the frontend

Frontend (React/Expo) interacts with the Python backend to deliver real-time AI suggestions inside the fitness app.

AI features include:

📌 Workout Generation

📌 Diet & Recipe Suggestions

📌 Shopping List Generation

📌 Voice-based input (if enabled on the frontend)

Backend leverages Groq’s high-speed LLaMA model (llama3-70b-8192) for ultra-fast responses.

Designed with modular, scalable code suitable for future expansion, including advanced analytics, authentication, and user-specific tracking.
