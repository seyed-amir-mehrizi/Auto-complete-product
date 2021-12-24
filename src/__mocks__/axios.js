
const mockReponse = {
    data: {
        products: [
            {
                "title": "Weekday THURSDAY Jeans Slim Fit black",
                "gtin": 2001007926858,
                "gender": "female",
                "sale_price": "39.95 EUR",
                "price": "39.95 EUR",
                "image_link": "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
                "additional_image_link": "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@22.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@21.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@20.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@19.jpg, https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@18.jpg"
            },
        ]
    }
}
export default {
    get: jest.fn().mockResolvedValue(mockReponse)
}