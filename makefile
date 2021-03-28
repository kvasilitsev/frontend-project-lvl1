install: # install dependencies
	npm ci

brain-games: #start project
	node bin/brain-games.js

publish: #publish dry-run
	npm publish --dry-run

lint: #start eslint
	npx eslint .

brain-even: #start even game
	node bin/brain-even.js

even: #start even.js
	node src/even.js