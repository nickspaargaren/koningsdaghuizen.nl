info:
	@echo test, test-update-screenshots

test:
	@docker run --rm --network=host -v ./:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.49.1-noble /bin/bash -c "yarn test"

test-update-screenshots:
	@docker run --rm --network=host -v ./:/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.49.1-noble /bin/bash -c "yarn test-update-screenshots"
