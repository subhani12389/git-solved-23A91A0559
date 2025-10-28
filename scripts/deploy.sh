#!/bin/bash
echo "Starting deployment..."

ENV=${1:-production}

if [ "$ENV" = "production" ]; then
  echo "Deploying to production environment..."
  docker-compose -f docker-compose.yml up -d
else
  echo "Deploying to development environment..."
  npm run build && npm start
fi

echo "Deployment complete."