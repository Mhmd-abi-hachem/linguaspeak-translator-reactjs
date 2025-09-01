<h1 align="center">LinguaSpeak</h1>

   <div align="center">
   An advanced, single-page web application that allows users to speak into the microphone, translate the spoken text to another language, and playback the translation. The app also features a "Word of the Day" to help users expand their vocabulary. This project was developed to demonstrate <strong>core frontend skills, with a specific focus on robust API consumption using two separate APIs in a modern React environment.<strong>
    </div>

<span id="live-demo"></span>

### **🚀 Live Demo**

[https://linguaspeak.netlify.app](https://linguaspeak.netlify.app)

## Table Of Contents

1. [Live Demo 🚀](#live-demo)
2. [Technologies Used ⚙](#technologies-used)
3. [Technical Features 🚀🚀](#technical-features)
4. [Core Features 🎯🎯](#core-features)
5. [Installation](#installation)

---

<span id="technologies-used"></span>

### Technologies Used ⚙

- React js
- Deep Translate API
- Word of the day API
- React Speech Recognition
- Tailwind CSS

---

<span id="technical-features"></span>

## Technical Features 🚀🚀

👉 **Multi-API Integration**: Seamlessly integrates two separate third-party APIs to provide its core functionality. It leverages a deep translation API for translation to translate text between languages. It also uses a second API to fetch the "Word of the Day" feature.

👉 **Accessible Modals (React Portals)**: The "Word of the Day" feature is displayed in a modal, which is implemented using React Portals. This approach ensures the modal is rendered outside of the main DOM hierarchy, which is crucial for accessibility, allowing screen readers and other assistive technologies to interact with the modal correctly.

👉 **Custom Hook Implementation**: The API-fetching and state management logic has been abstracted into a custom hook. This adheres to React best practices by making the code reusable, keeping components clean, and separating concerns.

👉 **Raw API Consumption**: All data fetching is handled using the useEffect hook. This showcases a deep understanding of raw API calls, data management, and handling loading and error states without relying on a third-party library like TanStack Query.

👉 **Security & Environment Variables**: This project uses environment variables to securely manage API keys and other sensitive data. By storing these keys in a .env file, we ensure they are not exposed in the public codebase, which is a critical security practice.

<span id="core-features"></span>

## Core Features 🎯🎯

👉 **Text Translation**: Auto detects input text language and translates it into a selected target language using Deep Translate API.

👉 **Speech Recognition**: Allowing users to speak and instantly see and hear the translated text and converts it into text using the Web Speech API.

👉 **Audio Playback**: Converts both the input and translated text back into speech using the Web Speech API's speech synthesis.

👉 **Copy to Clipboard**: Copies the translated text to the clipboard.

👉 **Responsive Design**: Ensures a seamless experience across different devices.

---

<span id="installation"></span>

### **Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_RAPID_API_KEY=your-api-key
```

Replace the placeholder values with your actual api credentials.

**Running the Project**

```bash
npm run dev
```
