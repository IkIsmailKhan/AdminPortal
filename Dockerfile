FROM kyma/docker-nginx
RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
COPY ./ ~/dac-web-app
WORKDIR ~/dac-web-app
RUN npm install
RUN npm run build
RUN mkdir /var/www
RUN mv dist/* /var/www
CMD 'nginx'
