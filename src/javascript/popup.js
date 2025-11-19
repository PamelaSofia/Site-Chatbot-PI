// js/popup.js
import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

Chatbot.init({
  chatflowid: "c7974f47-6406-44fc-b155-79b39f700662",
  apiHost: "https://flowise-chatbot-9q7s.onrender.com",

  theme: {
    button: {
      backgroundColor: '#3B81F6',
      right: 20,
      bottom: 20,
      size: 48,
      dragAndDrop: true,
      iconColor: 'white',
      customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
      autoWindowOpen: {
        autoOpen: true,
        openDelay: 2,
        autoOpenOnMobile: false
      }
    },
    tooltip: {
      showTooltip: true,
      tooltipMessage: 'Olá, posso te ajudar? 👋!',
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
      title: 'Flowise Bot',
      titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
      welcomeMessage: 'Olá, eu sou a Nina, sua Assistente Virtual',
      errorMessage: 'Algo deu errado. Tente novamente',
      backgroundColor: '#ffffff',
      height: 700,
      width: 400,
      fontSize: 16,
      starterPrompts: [
        "O que você pode fazer?",
        "Quem é você?"
      ],
      botMessage: {
        backgroundColor: '#f7f8ff',
        textColor: '#303235',
        showAvatar: true,
        avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
      },
      userMessage: {
        backgroundColor: '#3B81F6',
        textColor: '#ffffff',
        showAvatar: true,
        avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
      },
      textInput: {
        placeholder: 'Me faça uma pergunta',
        backgroundColor: '#ffffff',
        textColor: '#303235',
        sendButtonColor: '#3B81F6',
        maxChars: 50,
        maxCharsWarningMessage: 'Você excedeu o limite de caracteres.',
        autoFocus: true
      },
      footer: {
        textColor: '#303235',
        text: 'Desenvolvido por ',
        company: 'A Locomotiva',
        companyLink: 'https://github.com/PamelaSofia/PI_8-sem'
      }
    }
  }
})


