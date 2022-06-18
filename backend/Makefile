install:
	rm -f .bin/tegola .tmp/tegola
	curl -L https://github.com/go-spatial/tegola/releases/download/v0.15.2/tegola_linux_amd64.zip -o .tmp/tegola.zip
	unzip .tmp/tegola.zip -d .tmp/ && rm -f .tmp/tegola.zip
	chmod +x .tmp/tegola
	mv .tmp/tegola .bin/

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
