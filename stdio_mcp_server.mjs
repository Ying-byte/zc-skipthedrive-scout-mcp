#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "skipthedrive",
  boardId: "skipthedrive-official",
  domain: "skipthedrive.com",
  npmName: "zc-skipthedrive-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
