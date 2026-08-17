package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"
)

// TODO(mày viết): implement bằng golang.org/x/tools/go/packages
//
// Gợi ý các bước:
// 1. `go get golang.org/x/tools/go/packages`
// 2. packages.Load(&packages.Config{
//        Dir:  rootDir,
//        Mode: packages.NeedName | packages.NeedFiles | packages.NeedSyntax |
//              packages.NeedTypes | packages.NeedTypesInfo,
//    }, "./...")
// 3. Với mỗi pkg, lặp qua pkg.Syntax (các *ast.File):
//      ast.Inspect(file, func(n ast.Node) bool { ... })
//    Tìm *ast.FuncDecl để lấy Symbol (tên, dòng qua pkg.Fset.Position(n.Pos())).
// 4. Để lấy CallEdge: bên trong thân mỗi FuncDecl, tìm *ast.CallExpr, dùng
//    pkg.TypesInfo.Uses[ident] để resolve identifier đó trỏ tới func nào
//    (đây là chỗ go/packages hơn hẳn tree-sitter — có type info thật).
// 5. Import: file.Imports cho từng *ast.File.
//
// Build tăng dần: symbols + imports trước (dễ), call graph sau (khó vì cần
// resolve qua TypesInfo).
func indexGoProject(rootDir string) (IndexResult, error) {
	return IndexResult{}, fmt.Errorf("TODO: chưa implement indexGoProject(%s)", rootDir)
}

func main() {
	rootDir := flag.String("dir", ".", "thư mục gốc của Go project cần index")
	flag.Parse()

	result, err := indexGoProject(*rootDir)
	if err != nil {
		fmt.Fprintln(os.Stderr, "error:", err)
		os.Exit(1)
	}

	enc := json.NewEncoder(os.Stdout)
	enc.SetIndent("", "  ")
	if err := enc.Encode(result); err != nil {
		fmt.Fprintln(os.Stderr, "error encoding json:", err)
		os.Exit(1)
	}
}
