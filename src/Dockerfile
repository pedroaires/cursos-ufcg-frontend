FROM httpd:2.4

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . /usr/local/apache2/htdocs/

# Disable directory listing for security and add basic caching headers
RUN echo "Options -Indexes" >> /usr/local/apache2/conf/httpd.conf && \
    echo "<IfModule mod_headers.c>\n Header set Cache-Control \"max-age=31536000, public\"\n</IfModule>" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80

# Set the entrypoint to the custom script
ENTRYPOINT ["/entrypoint.sh"]
