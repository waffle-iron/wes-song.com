# Use Node v6 latest as the base image.
FROM node:6

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /app

# Install dependencies
RUN cd /app; \
    npm install --production

# Expose our server port.
EXPOSE 8124

# Run our app.
CMD ["node", "/app/index.js"]