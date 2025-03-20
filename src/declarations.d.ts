// src/vite-env.d.ts или src/declarations.d.ts
declare module "*.module.scss" {
  const s: { [key: string]: string };
  export default s;
}
