import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

// 几张真实商品图（从你现有页面沿用），随机分配给每个商品
const productImages = [
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smartphone%20product%20photo%20black%20body%20colorful%20screen%20white%20background%20e-commerce&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mechanical%20keyboard%20product%20photo%20black%20keycaps%20white%20background%20e-commerce&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wireless%20computer%20mouse%20product%20photo%20black%20white%20background%20e-commerce&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=over%20ear%20headphones%20product%20photo%20black%20white%20background%20e-commerce&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=laptop%20notebook%20product%20photo%20silver%20white%20background%20e-commerce&image_size=square',
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20watch%20product%20photo%20black%20white%20background%20e-commerce&image_size=square',
]

export default [
    {
        url: '/api/produces',
        method: 'get',
        response: () => {
            return {
                code: 0,
                message: 'ok',
                data: Mock.mock({
                    'list|8': [
                        {
                            'id|+1': 1,
                            name: '@ctitle(2,6)',
                            'price|99-5999.2': 0,
                            'img|1': productImages,
                        },
                    ],
                }).list,
            }
        },
    },
] as MockMethod[]
