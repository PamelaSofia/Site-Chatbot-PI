// js/popup.js
import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

Chatbot.init({
  chatflowid: "c7974f47-6406-44fc-b155-79b39f700662",
  apiHost: "https://flowise-chatbot-9q7s.onrender.com",

  theme: {
    button: {
      backgroundColor: '#1c3b97ff',
      right: 20,
      bottom: 20,
      size: 48,
      dragAndDrop: true,
      iconColor: 'black',
      customIconSrc: 'https://raw.githubusercontent.com/PamelaSofia/Site-Chatbot-PI/main/ninabot_avatar.png',
      autoWindowOpen: {
        autoOpen: false,
        openDelay: 2,
        autoOpenOnMobile: false
      }
    },
    tooltip: {
      showTooltip: true,
      tooltipMessage: 'Olá 👋!',
      tooltipBackgroundColor: 'black',
      tooltipTextColor: 'white',
      tooltipFontSize: 16
    },
/*    disclaimer: {
      title: 'Assistente',
      message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
      textColor: 'black',
      buttonColor: '#3b82f6',
      buttonText: 'Start Chatting',
      buttonTextColor: 'white',
      blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
      backgroundColor: 'white'
    },*/
    chatWindow: {
      showTitle: true,
      showAgentMessages: true,
      title: 'NinaBot',
      titleAvatarSrc: 'https://raw.githubusercontent.com/PamelaSofia/Site-Chatbot-PI/main/ninabot_avatar.png',
      welcomeMessage: 'Olá, eu sou a Nina, sua Assistente Virtual',
      errorMessage: 'Ocorreu um erro, tente novamente mais tarde',
      backgroundColor: '#333333',
      height: Math.min(700, window.innerHeight * 0.8), 
      width: Math.min(400, window.innerWidth * 0.9), 
      fontSize: 16,
      starterPrompts: [
        "Quem é você?",
        "O  que você pode fazer?"
      ],
      botMessage: {
        backgroundColor: '#f5f5f5',
        textColor: '#000',
        showAvatar: true,
        avatarSrc: 'https://raw.githubusercontent.com/PamelaSofia/Site-Chatbot-PI/main/ninabot_avatar.png'
      },
      userMessage: {
        backgroundColor: '#2c5be6',
        textColor: '#f5f5f5',
        showAvatar: true,
        avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
      },
      textInput: {
        placeholder: 'Me faça uma pergunta',
        backgroundColor: '#f5f5f5',
        textColor: '#000',
        sendButtonColor: '#000',
        maxChars: 100,
        maxCharsWarningMessage: 'Você excedeu o limite de caracteres.',
        autoFocus: true
      },
      footer: {
        textColor: '#000',
        text: 'Desenvolvido por ',
        company: 'A Locomotiva',
        companyLink: 'https://github.com/PamelaSofia/Site-Chatbot-PI/tree/main'
      }
    }
  }
})











