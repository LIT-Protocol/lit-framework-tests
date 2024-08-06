declare module "process" {
    import { Process } from "node:process";
    export = Process;
}

declare module "buffer" {
    export const Buffer: any;
}
