const asset = (filename) => new URL(`../assets/${filename}`, import.meta.url).href;

const floatingImages = [
    { id: "p1", src: asset("asset 1.png"), alt: "Floating icon 1" },
    { id: "p2", src: asset("asset 2.png"), alt: "Floating icon 2" },
    { id: "p3", src: asset("asset3.png"), alt: "Floating icon 3" },
    { id: "p4", src: asset("asset 4.png"), alt: "Floating icon 4" },
    { id: "p5", src: asset("asset 5.png"), alt: "Floating icon 5" },
    { id: "p6", src: asset("asset 6.png"), alt: "Floating icon 6" },
    { id: "p7", src: asset("asset 7.png"), alt: "Floating icon 7" },
    { id: "p8", src: asset("asset 8.png"), alt: "Floating icon 8" },
    { id: "p9", src: asset("asset 9.png"), alt: "Floating icon 9" },
    { id: "p10", src: asset("asset 10.png"), alt: "Floating icon 10" },
    { id: "p11", src: asset("asset 11.png"), alt: "Floating icon 11" },
    { id: "p12", src: asset("asset 12.png"), alt: "Floating icon 12" },
];

const imgPositions = [
    {
        id: "p1",
        left: 10,
        top: 14,
        rotate: -10,
    },
    {
        id: "p2",
        left: 35,
        top: 10,
        rotate: -6,
    },
    {
        id: "p3",
        left: 65,
        top: 15,
        rotate: 5,
    },
    {
        id: "p4",
        left: 102,
        top: 18,
        rotate: 10,
    },
    {
        id: "p5",
        left: 5,
        top: 40,
        rotate: -8,
    },
    {
        id: "p6",
        left: 95,
        top: 40,
        rotate: 8,
    },
    {
        id: "p7",
        left: 3,
        top: 62,
        rotate: -12,
    },
    {
        id: "p8",
        left: 15,
        top: 78,
        rotate: -6,
    },
    {
        id: "p9",
        left: 42,
        top: 86,
        rotate: -2,
    },
    {
        id: "p10",
        left: 65,
        top: 86,
        rotate: 2,
    },
    {
        id: "p11",
        left: 85,
        top: 78,
        rotate: 6,
    },
    {
        id: "p12",
        left: 100,
        top: 62,
        rotate: 12,
    },
];

export {
    floatingImages,
    imgPositions,
}