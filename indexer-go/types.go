package main

// Contract chung, khớp với mcp-server/src/types.ts — output cuối cùng là JSON
// theo shape này, MCP server (TS) sẽ đọc và ghi vào Postgres.

type Symbol struct {
	Name      string `json:"name"`
	Kind      string `json:"kind"`
	File      string `json:"file"`
	Line      int    `json:"line"`
	Signature string `json:"signature"`
}

type CallEdge struct {
	FromSymbol string `json:"fromSymbol"`
	ToSymbol   string `json:"toSymbol"`
	File       string `json:"file"`
	Line       int    `json:"line"`
}

type Import struct {
	File        string `json:"file"`
	ImportsFrom string `json:"importsFrom"`
}

type IndexResult struct {
	Symbols []Symbol   `json:"symbols"`
	Calls   []CallEdge `json:"calls"`
	Imports []Import   `json:"imports"`
}
