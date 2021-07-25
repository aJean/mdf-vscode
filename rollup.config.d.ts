declare namespace _default {
    const input: string;
    const output: {
        format: string;
        file: string;
    }[];
    const plugins: import("rollup").Plugin[];
}
export default _default;
