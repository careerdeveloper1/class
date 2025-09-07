FROM mysql:8
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=hrms_db
ENV MYSQL_USER=hrms_user
ENV MYSQL_PASSWORD=hrms_password
COPY init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306
