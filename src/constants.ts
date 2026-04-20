export interface Language {
  id: number;
  name: string;
  monacoMode: string;
  defaultCode: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    id: 105,
    name: "C++ (GCC 14.1.0)",
    monacoMode: "cpp",
    defaultCode: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\";\n    return 0;\n}"
  },
  {
    id: 103,
    name: "C (GCC 14.1.0)",
    monacoMode: "c",
    defaultCode: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World\");\n    return 0;\n}"
  },
  {
    id: 25,
    name: "Python (3.11.2)",
    monacoMode: "python",
    defaultCode: "print(\"Hello World\")"
  },
  {
    id: 91,
    name: "Java (JDK 17.0.6)",
    monacoMode: "java",
    defaultCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}"
  },
  {
    id: 102,
    name: "JavaScript (Node.js 22.08.0)",
    monacoMode: "javascript",
    defaultCode: "console.log(\"Hello World\");"
  },
  {
    id: 101,
    name: "TypeScript (5.6.2)",
    monacoMode: "typescript",
    defaultCode: "console.log(\"Hello World\");"
  }
];
