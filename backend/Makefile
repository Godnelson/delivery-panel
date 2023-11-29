PROJECT = "Delivery panel server side"

build:
	docker build -t backend .

run:
	docker run --name backend -dp 127.0.0.1:8080:8080 backend

stop:
	docker kill backend
	docker rm backend
