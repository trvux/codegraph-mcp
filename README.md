# codegraph-mcp

MCP server cho Claude Code: index codebase (Go, TS/Next.js) thành symbol/call
graph, lưu Postgres, để Claude query thay vì grep+read nhiều file. Có thêm
visualizer (Next.js + shadcn, làm sau) để tự đọc-hiểu codebase.

## Cấu trúc

- `mcp-server/` — MCP server (TypeScript). Đăng ký 4 tool cho Claude:
  `find_definition`, `find_references`, `get_call_graph`, `summarize_module`.
- `mcp-server/src/adapters/tsAdapter.ts` — index project TS/Next.js bằng ts-morph.
- `indexer-go/` — CLI binary Go, index project Go bằng `go/packages`, xuất JSON
  theo shape `IndexResult` (khớp `mcp-server/src/types.ts`).

Đây là **boilerplate** — wiring đã chạy được (build/type-check pass), phần
logic thật (parse code, build graph, query DB) để `TODO` trong từng file, có
comment hướng dẫn từng bước. Không copy code mẫu vào — tự viết, hỏi khi kẹt.

## Thứ tự làm gợi ý

1. `mcp-server/src/db.ts` — `ensureSchema()`: tạo bảng Postgres (symbols,
   call_edges, imports, file_hashes).
2. `mcp-server/src/adapters/tsAdapter.ts` — `indexTypeScriptProject()`: trước
   hết symbols + imports, chạy đúng rồi mới thêm call graph.
3. `indexer-go/main.go` — `indexGoProject()`: tương tự, symbols + imports
   trước, call graph sau (cần `pkg.TypesInfo` để resolve).
4. `mcp-server/src/index.ts` — nối 4 tool handler vào query Postgres thật.
5. Test bằng tay: chạy `npm run dev` trong `mcp-server/`, thêm server này vào
   Claude Code config (`claude mcp add`), thử gọi tool từ Claude CLI.

## Chạy thử wiring (chưa có logic thật, sẽ throw TODO error)

```bash
cd mcp-server && npm install && npm run dev
cd indexer-go && go build ./...
```

## Env cần

- `DATABASE_URL` — connection string Postgres trên VPS.
