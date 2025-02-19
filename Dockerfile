# Step 1: Build the app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app for production
RUN npm run build  # This ensures the .next directory is created

# Step 2: Serve the app with a minimal Node.js server
FROM node:18-alpine

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/package.json package.json
COPY --from=build /app/node_modules node_modules

# Expose the port the app will run on
EXPOSE 3000

# Start the app in production mode
ENTRYPOINT ["npm", "run", "start"]
CMD []


# # Step 1: Build the app
# FROM node:18-alpine AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Build the Next.js app for production
# RUN npm run build

# # Step 2: Serve the app with a minimal Node.js server
# FROM node:18-alpine

# # Set the working directory
# WORKDIR /app

# # Copy the build output from the build stage
# COPY --from=build /app ./

# # Install serve to serve the app
# RUN npm install -g serve

# # Expose the port the app will run on
# EXPOSE 3000

# # Start the app
# CMD ["npm", "run", "start"]
