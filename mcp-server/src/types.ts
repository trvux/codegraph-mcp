// Contract chung mà mọi language adapter (Go, TS, ...) phải trả về.
// Đừng đổi shape này khi viết adapter — giữ adapter khác nhau ở CÁCH lấy ra
// dữ liệu này (go/packages vs ts-morph), không phải ở shape dữ liệu.

export interface Symbol {
  name: string;
  kind: "function" | "method" | "type" | "class" | "interface" | "const";
  file: string;
  line: number;
  signature: string;
}

export interface CallEdge {
  fromSymbol: string;
  toSymbol: string;
  file: string;
  line: number;
}

export interface Import {
  file: string;
  importsFrom: string;
}

export interface IndexResult {
  symbols: Symbol[];
  calls: CallEdge[];
  imports: Import[];
}
