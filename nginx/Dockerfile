FROM nginx
RUN sudo certbot certonly --nginx
COPY ./default.conf  /etc/nginx/conf.d/default.conf