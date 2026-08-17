import { Project } from "ts-morph";
import type { IndexResult } from "../types.js";

// TODO(mày viết): index 1 project TypeScript/Next.js thành IndexResult.
//
// Gợi ý các bước (đọc ts-morph docs qua context7 nếu cần API cụ thể):
// 1. new Project({ tsConfigFilePath: `${rootDir}/tsconfig.json` })
// 2. project.getSourceFiles() -> lặp qua từng file
// 3. Với mỗi file, lấy functions/classes/methods:
//      sourceFile.getFunctions(), sourceFile.getClasses(), ...
//    Mỗi cái có .getName(), .getStartLineNumber(), và bạn tự build "signature"
//    dạng string (vd: getSignature? hoặc tự ghép từ params).
// 4. Để lấy CallEdge: với mỗi function, tìm các CallExpression bên trong thân hàm
//    (node.getDescendantsOfKind(SyntaxKind.CallExpression)), rồi thử resolve
//    xem call đó trỏ tới symbol nào (getSymbol() -> getDeclarations()).
//    Đây là phần khó nhất — bắt đầu với case đơn giản (gọi hàm cùng file) trước,
//    rồi mở rộng sang cross-file.
// 5. Import: sourceFile.getImportDeclarations() -> getModuleSpecifierValue()
//
// Đừng cố làm đúng 100% ngay — build tăng dần: trước hết symbols + imports
// chạy đúng, commit, rồi mới thêm call graph (phần khó).
export function indexTypeScriptProject(rootDir: string): IndexResult {
  throw new Error(`TODO: chưa implement indexTypeScriptProject(${rootDir})`);
}
