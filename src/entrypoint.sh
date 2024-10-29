#!/bin/sh
# entrypoint.sh - Replaces the BACKEND_URL placeholder with the runtime environment variable

# Set default value for BACKEND_URL if not set
BACKEND_URL=${BACKEND_URL:-http://localhost:5000}

# Substitute BACKEND_URL in request.js
sed -i "s|BACKEND_URL|${BACKEND_URL}|g" /usr/local/apache2/htdocs/app/shared/request.js

# Start Apache in the foreground
exec httpd-foreground
