import pg from "pg";

// DATABASE_URL trỏ vào Postgres trên VPS, vd:
// postgres://user:pass@your-domain.com:5432/codegraph
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// TODO(mày viết): tạo schema ban đầu.
// Tối thiểu cần các bảng tương ứng IndexResult trong types.ts:
//   symbols(name, kind, file, line, signature)
//   call_edges(from_symbol, to_symbol, file, line)
//   imports(file, imports_from)
//   file_hashes(file, hash)   -- dùng để biết file nào đổi, phục vụ incremental index
//
// Gợi ý: viết 1 file schema.sql riêng, chạy bằng tay hoặc bằng 1 script migrate
// nhỏ gọi pool.query(fs.readFileSync("schema.sql", "utf-8")) lúc khởi động.
export async function ensureSchema(): Promise<void> {
  throw new Error("TODO: chưa tạo schema Postgres");
}
