#!/usr/bin/env node

'use strict';

const port = process.env.LR_PORT || 35729;

require('tiny-lr')()
	.listen(
		port,
		() => console.log(`livereload[tiny-lr] listening on ${port}`)
	);

