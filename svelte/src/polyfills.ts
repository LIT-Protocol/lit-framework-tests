(globalThis as any).global = globalThis;

import("buffer").then((BufferModule) => {
    (globalThis as any).Buffer = BufferModule.Buffer;
});

import("process").then((processModule) => {
    (globalThis as any).process = processModule;
});
