FROM mysql:5

ENV MYSQL_ROOT_PASSWORD 123
ENV MYSQL_DATABASE resume
ENV MYSQL_USER resume_db
ENV MYSQL_PASSWORD 123

ADD resume-setup.sql /docker-entrypoint-initdb.d