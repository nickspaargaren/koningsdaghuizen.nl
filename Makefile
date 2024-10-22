info:
	@echo test, test-update-screenshots

test:
	@docker run --rm --network=host -v ./:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.48.1-noble /bin/bash -c "yarn install && yarn test"

test-update-screenshots:
	@docker run --rm --network=host -v ./:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.48.1-noble /bin/bash -c "yarn install && yarn test-update-screenshots"