up:
	docker-compose up -d

down:
	docker-compose down

clean: down
	docker volume prune -f
	sudo rm -rf .docker/postgres

runPostGIS:
	./.bin/tegola serve --config=config-postgis.toml

runGeoPackage:
	./.bin/tegola serve --config=config-gpkg.toml
