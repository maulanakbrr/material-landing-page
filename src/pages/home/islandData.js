const ISLAND_DATA = {
    island1: {
        name: 'Bora-bora',
        imageUrl: process.env.PUBLIC_URL + '/images/island1.jpg',
        description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving.",
        direction: 'left',
        time: 1500
    },
    island2: {
        name: 'Maldives',
        imageUrl: `${process.env.PUBLIC_URL + '/images/island3.jpg'}`,
        description: "Maldives, officially the Republic of Maldives, is a small archipelagic state in South Asia, situated in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 700 kilometres from the Asian continent's mainland.",
        direction: 'right',
        time: 1500
    }
}

export default ISLAND_DATA;