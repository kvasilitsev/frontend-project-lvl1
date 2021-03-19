install: # install dependencies
	npm install

brain-games: #start project
	node bin/brain-games.js

publish: #publish dry-run
	npm publish --dry-run
