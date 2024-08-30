# Use Node.js 18 as specified
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Optionally update npm to match local environment
RUN npm install -g npm@10.5.0

# Disable linting during build if needed
# RUN npm run build || true

# Default to development mode for testing
CMD ["npm", "run", "dev"]
