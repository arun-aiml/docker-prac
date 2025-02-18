FROM httpd
MAINTAINER Mr Arun
LABEL this is my web
COPY   . /usr/local/apache2/htdocs/
