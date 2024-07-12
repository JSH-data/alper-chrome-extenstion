// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CONSTANT = {
  REPO_NAME: "repo_name",
  OWNER_NAME: "owner_name",
  STORAGE_PATH: "storage_path",
  ACCESS_TOKEN: "access_token",
  PLATFORM_OPTION: "PLATFORM_OPTION",
} as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MESSAGE_TEXT = {
  E01: "예기치 못한 에러가 발생했습니다. (CODE: E01)",
  E11: "확장자를 찾지 못하였습니다. (CODE: E10)",
  E21: "코드 파싱에 실패하였습니다. (CODE: E21)",
  E31: "깃허브 업로드 중 문제가 발생했습니다. (CODE: E31)",
  E41: "인증이 완료되지 않았습니다. 팝업을 통해 인증을 완료해주세요. (CODE: E41)",
  NORMAL: "Alpher is Running!",
} as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EXTENSIONS_NAME: { [key: string]: string } = Object.freeze({
  TypeScript: "ts",
  JavaScript: "js",
  "C++": "cpp",
  PHP: "php",
  Java: "java",
  Python: "py",
  Python3: "py",
  C: "c",
  "C#": "cs",
  Swift: ".swift",
  Kotlin: ".kt",
  Dart: "dart",
  Go: ".go",
  Ruby: "rb",
  Scala: ".scala",
  Rust: ".rs",
  Racket: ".rkt",
  Erlang: "erl",
  Elixir: "ex",
  MySQL: "sql",
  "MS SQL Server": "sql",
  Oracle: "sql",
  Pandas: ".py",
  PostgresSQL: "sql",
});
