FROM httpd:2.4

COPY . /usr/local/apache2/htdocs/

RUN echo "Options -Indexes" >> /usr/local/apache2/conf/httpd.conf && \
    echo "<IfModule mod_headers.c>\n Header set Cache-Control \"max-age=31536000, public\"\n</IfModule>" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80

CMD ["httpd-foreground"]
