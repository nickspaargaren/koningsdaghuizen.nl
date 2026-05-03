info:
	@echo test, test-update-screenshots

test:
	@docker run --rm --network=host -v ./:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.58.2-noble /bin/bash -c "corepack enable && corepack prepare --activate && yarn install --immutable && yarn test"

test-update-screenshots:
	@docker run --rm --network=host -v ./:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.58.2-noble /bin/bash -c "corepack enable && corepack prepare --activate && yarn install --immutable && yarn test-update-screenshots"