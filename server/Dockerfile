# Usar a imagem oficial do Node.js como base
FROM node:22

# Instalar o cliente MySQL
RUN apt-get update && apt-get install -y default-mysql-client && rm -rf /var/lib/apt/lists/*

# Criar diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Expor a porta que o aplicativo vai rodar
EXPOSE 8081

# Instale nodemon
RUN npm install -g nodemon

# Comando para rodar a aplicação
CMD ["nodemon", "src/app.js"]
