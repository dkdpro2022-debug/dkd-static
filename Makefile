PROJECT_NAME ?= dkd-staging
BRANCH ?= staging
DIST_DIR ?= dist
DEV_HOST ?= 0.0.0.0
DEV_PORT ?= 3000
NODE_BIN ?= $(HOME)/.nvm/versions/node/v22.16.0/bin
NPM ?= $(NODE_BIN)/npm
SFW ?= $(NODE_BIN)/sfw
WRANGLER ?= $(NPM) exec --yes wrangler --

.PHONY: help install dev build check-cloudflare-env create-staging-project deploy-staging preview clean

help:
	@echo "Targets:"
	@echo "  make install          Install npm dependencies with npm ci"
	@echo "  make dev              Start Vite dev server on http://$(DEV_HOST):$(DEV_PORT)"
	@echo "  make build            Build the React app through Socket Firewall"
	@echo "  make check-cloudflare-env"
	@echo "                        Check required Cloudflare environment variables"
	@echo "  make create-staging-project"
	@echo "                        Create the Cloudflare Pages staging project"
	@echo "  make preview          Serve $(DIST_DIR) locally on http://127.0.0.1:8000"
	@echo "  make deploy-staging   Build and deploy $(DIST_DIR) to Cloudflare Pages"
	@echo ""
	@echo "Variables:"
	@echo "  PROJECT_NAME=$(PROJECT_NAME)"
	@echo "  BRANCH=$(BRANCH)"
	@echo "  DEV_HOST=$(DEV_HOST)"
	@echo "  DEV_PORT=$(DEV_PORT)"
	@echo ""
	@echo "Example:"
	@echo "  make deploy-staging PROJECT_NAME=your-cloudflare-pages-project"

install:
	npm ci

build:
	$(SFW) npm run build

dev:
	$(NPM) run dev -- --host $(DEV_HOST) --port $(DEV_PORT)

check-cloudflare-env:
	@test -n "$$CLOUDFLARE_API_TOKEN" || (echo "Missing CLOUDFLARE_API_TOKEN. Example: export CLOUDFLARE_API_TOKEN=\$$(pass token/cloudflare-build-pages)" && exit 1)
	@test -n "$$CLOUDFLARE_ACCOUNT_ID" || (echo "Missing CLOUDFLARE_ACCOUNT_ID. Example: export CLOUDFLARE_ACCOUNT_ID=\$$(pass token/cloudflare-account-id)" && exit 1)

create-staging-project: check-cloudflare-env
	$(WRANGLER) pages project create $(PROJECT_NAME) --production-branch=$(BRANCH)

deploy-staging: check-cloudflare-env build
	$(WRANGLER) pages deploy $(DIST_DIR) --project-name=$(PROJECT_NAME) --branch=$(BRANCH)

preview: build
	$(NPM) run preview -- --host 127.0.0.1 --port 8000

clean:
	rm -rf $(DIST_DIR)
