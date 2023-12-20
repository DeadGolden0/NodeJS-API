## 🌐 NodeJS API

Welcome to the **NodeJS API** repository! This repo host private code for Petrus App Project.

## 📋 Prerequisites

- NodeJS > 20.X.X
- NPM
- MySQL Server

## ⚙️ Installation

```bash
git clone https://github.com/DeadGolden0/NodeJS-API.git
cd NodeJS-API
npm install
```

## 📋 Configuration
Setup and configure the **NodeJS Environement (ENV)**.

> [!TIP]
> You can run the all command with `sudo` if it requires access to restricted files or elevated privileges. Just prepend `sudo` to the command.

```bash
cd NodeJS-API
mv .env.default .env
nano .env
```

```bash
# Global Settings
NODE_ENV= 
PORT=

# MySQL Server
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

Next, you need to configure **NGINX/Apache Server** for **Reverse Proxy**

```bash
cd /etc/nginx/sites-available/
nano exemple.com
```

Add new location to your configuration file
```bash
location /api {
        proxy_pass http://localhost:YourSelectedPort;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
```
Replace ``YourSelectedPort`` with the port you have previously configured in the ``.env`` file.

## 🖥️ Usage

```bash
node server.js
```

## 🤝 Contributing

Your contributions make the open source community a fantastic place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✉️ Contact

For any questions or suggestions, please feel free to contact me:

[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/w92W7XR9Yg)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:deadgolden9122@gmail.com)
[![Steam](https://img.shields.io/badge/steam-%23000000.svg?style=for-the-badge&logo=steam&logoColor=white)](https://steamcommunity.com/id/DeAdGoLdEn/)

## 💖 Support Me

If you find this project helpful and would like to support my work, you can contribute through PayPal. Any support is greatly appreciated and helps me continue developing and maintaining the project.

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/DeadGolden0)
