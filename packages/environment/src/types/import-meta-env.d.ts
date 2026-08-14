interface Environment {
  readonly [key: string]: unknown;
}

interface ImportMeta {
  readonly env: Environment;
}
