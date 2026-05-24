---
title: "phoenix docker compose예제"
tags: ["데이터베이스"]
created: "2020-04-08T14:42:40.589Z"
modified: "2021-02-16T02:03:44.881Z"
urlPath: "phoenix docker compose예제"
---

![phoenix](/images/phoenix.png)

# phoenix docker compose

```dockerfile
# Version of docker-compose
version: '3'

# Containers we are going to run
services:
  # Our Phoenix container
  phoenix:
    # The build parameters for this container.
    build:
      # Here we define that it should build from the current directory
      context: .
    environment:
      # Variables to connect to our Postgres server
      PGUSER: postgres
      PGPASSWORD: postgres
      PGDATABASE: database_name
      PGPORT: 5432
      # Hostname of our Postgres container
      PGHOST: db
    ports:
      # Mapping the port to make the Phoenix app accessible outside of the container
      - "4000:4000"
    depends_on:
      # The db container needs to be started before we start this container
      - db
  db:
    # We use the predefined Postgres image
    image: postgres:9.6
    environment:
      # Set user/password for Postgres
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      # Set a path where Postgres should store the data
      PGDATA: /var/lib/postgresql/data/pgdata
    restart: always
    volumes:
      - pgdata:/var/lib/postgresql/data
# Define the volumes
volumes:
  pgdata:
```

## 참고자료

https://pspdfkit.com/blog/2018/how-to-run-your-phoenix-application-with-docker/
