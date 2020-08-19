develop: clean build run

clean:
	docker-compose -f docker-compose.yml stop -t0
	docker-compose -f docker-compose.yml rm -f

build:
	docker-compose -f docker-compose.yml build

run:
	docker-compose -f docker-compose.yml up
