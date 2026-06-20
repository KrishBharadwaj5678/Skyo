[English](README.md) | [Português](README.pt.md) | [日本語](README.ja.md) | [Русский](README.ru.md)

# 🌤️ Skyo

O **Skyo** é uma aplicação de clima moderna, limpa e responsiva que fornece condições meteorológicas em tempo real e informações de qualidade do ar para qualquer cidade do mundo.

![Skyo Preview](https://github.com/KrishBharadwaj5678/Skyo/raw/main/SkyoDemo.png)

## 🚀 Funcionalidades

| Funcionalidade              | Descrição                                               |
| --------------------------- | ------------------------------------------------------- |
| 🌍 Pesquisa de cidade       | Busque dados meteorológicos de qualquer cidade do mundo |
| 🌡️ Temperatura atual       | Exibe a temperatura em tempo real em °C                 |
| 🌬️ Vento                   | Mostra velocidade e direção do vento                    |
| 💧 Umidade                  | Percentual de umidade em tempo real                     |
| 👁️ Visibilidade            | Distância de visibilidade em quilômetros                |
| 🌅 Nascer e pôr do sol      | Horários precisos do nascer e pôr do sol                |
| 🌡️ Sensação térmica        | Temperatura percebida com base nas condições            |
| 🧪 Dados de qualidade do ar | Informações de poluição do ar em tempo real             |
| 🧫 Poluentes                | PM2.5, PM10, NO₂, NO, CO, SO₂, NH₃, O₃                  |
| 🌙 Modo escuro / claro      | Alternância de tema amigável                            |
| 📱 Design responsivo        | Otimizado para mobile, tablet e desktop                 |
| ⚡ Interface rápida          | Transições suaves e atualizações instantâneas           |

---

## 🛠️ Tecnologias

| Categoria                      | Tecnologia        |
| ------------------------------ | ----------------- |
| ⚛️ **Frontend**                | React.js          |
| 🧠 **Gerenciamento de estado** | React Context API |
| 🎨 **Estilização**             | Tailwind CSS      |
| 🌦️ **API**                    | OpenWeather API   |
| 🔗 **Cliente HTTP**            | Axios             |

---

## ⚙️ Instalação e Configuração

### 1️⃣ Clonar o repositório

```bash id="k1m9qp"
git clone https://github.com/KrishBharadwaj5678/Skyo.git
```

### 2️⃣ Acessar o diretório do projeto

```bash id="n4x8za"
cd Skyo
```

### 3️⃣ Instalar dependências

```bash id="t6v2lm"
npm install
```

### 4️⃣ Iniciar o servidor de desenvolvimento

```bash id="p9x3cd"
npm run dev
```

### 5️⃣ Abrir no navegador

---

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e adicione:

```env id="77fnj2"
VITE_BASE_URL = "https://api.openweathermap.org/data/2.5"
VITE_APP_ID = sua_chave_api_aqui
```
