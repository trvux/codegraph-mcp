import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { pool } from "./db.js";

const server = new McpServer({
  name: "codegraph-mcp",
  version: "0.1.0",
});

server.registerTool(
  "find_definition",
  {
    title: "Find symbol definition",
    description: "Tìm nơi định nghĩa 1 symbol (function/class/type) trong codebase đã index.",
    inputSchema: { symbol: z.string() },
  },
  async ({ symbol }) => {
    // TODO(mày viết): SELECT file, line, signature FROM symbols WHERE name = $1
    void pool;
    throw new Error(`TODO: find_definition(${symbol}) chưa implement`);
  },
);

server.registerTool(
  "find_references",
  {
    title: "Find references",
    description: "Tìm tất cả nơi 1 symbol được gọi/dùng trong codebase.",
    inputSchema: { symbol: z.string() },
  },
  async ({ symbol }) => {
    // TODO(mày viết): SELECT file, line FROM call_edges WHERE to_symbol = $1
    throw new Error(`TODO: find_references(${symbol}) chưa implement`);
  },
);

server.registerTool(
  "get_call_graph",
  {
    title: "Get call graph",
    description: "Lấy call graph của 1 function, tới độ sâu depth.",
    inputSchema: { symbol: z.string(), depth: z.number().default(2) },
  },
  async ({ symbol, depth }) => {
    // TODO(mày viết): BFS/recursive CTE trên call_edges bắt đầu từ symbol,
    // giới hạn theo depth.
    throw new Error(`TODO: get_call_graph(${symbol}, ${depth}) chưa implement`);
  },
);

server.registerTool(
  "summarize_module",
  {
    title: "Summarize module",
    description: "Liệt kê signature của tất cả symbol trong 1 file/module, không trả full code.",
    inputSchema: { path: z.string() },
  },
  async ({ path }) => {
    // TODO(mày viết): SELECT name, kind, signature FROM symbols WHERE file = $1
    throw new Error(`TODO: summarize_module(${path}) chưa implement`);
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
