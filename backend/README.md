# Getting Started with Tegola

Based on https://tegola.io/documentation/getting-started/

```
mkdir -p .docker/shared
docker-compose up -d
docker exec -it postgres /bin/sh

cd /volumes
export POSTGRES_PASSWORD=docker
psql -h 0.0.0.0 --username=docker -c "CREATE DATABASE bonn;"
psql -h 0.0.0.0 --username=docker bonn < bonn_osm.dump
psql -h 0.0.0.0 --username=docker -c "CREATE USER tegola;"
psql -h 0.0.0.0 --username=docker -c "ALTER USER tegola WITH PASSWORD 'tegola';"
psql -h 0.0.0.0 --username=docker -d bonn -c "GRANT SELECT ON ALL TABLES IN SCHEMA public TO tegola;"

exit
```

```
./.bin/tegola serve --config=config.toml
```