FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=hrms_db
ENV MYSQL_USER=hrms_user
ENV MYSQL_PASSWORD=hrms_password

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306