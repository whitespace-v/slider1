export const itemAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: (v: number) => ({
        opacity: 1,
        transition: {delay: v * 0.1}
    }),
}