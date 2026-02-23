export function clsx(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
