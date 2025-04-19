.PHONY: dev prod build clean logs shell help

# Development commands
dev:
	docker compose up --build -d 
	# dev

dev-build:
	docker compose build dev

# Production commands
prod:
	docker compose up -d prod

prod-build:
	docker compose build prod

# Utility commands
build:
	docker compose build

clean:
	docker compose down
	docker system prune -f

logs:
	docker compose logs -f

shell-dev:
	docker compose exec dev sh

shell-prod:
	docker compose exec prod sh

# Help command
help:
	@echo "Available commands:"
	@echo "  dev         - Start development environment"
	@echo "  dev-build   - Build development container"
	@echo "  prod        - Start production environment"
	@echo "  prod-build  - Build production container"
	@echo "  build       - Build all containers"
	@echo "  clean       - Stop containers and clean Docker system"
	@echo "  logs        - View container logs"
	@echo "  shell-dev   - Access development container shell"
	@echo "  shell-prod  - Access production container shell"