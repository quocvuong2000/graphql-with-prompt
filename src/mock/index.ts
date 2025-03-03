/**
 * Mock data for vehicle listings
 * Contains a collection of vehicle information with standardized image URLs
 * Used for development and testing purposes when the actual API is not available
 */
export const mockData = {
  items: [
    {
      id: 'car-1',
      name: 'Mitsubishi Attrage 1.2 CVT',
      price: '$57,800',
      description: 'Blue sedan with 80,515km, 1 previous owner',
      mileage: '80,515km',
      owners: '1',
      registrationDate: '-',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    },
    {
      id: 'car-2',
      name: 'Polestar 2 Long Range Dual Motor',
      price: '$186,800',
      description: 'Black electric vehicle with 17,000km, 1 previous owner',
      mileage: '17,000km',
      owners: '1',
      registrationDate: '30-08-2023',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    },
    {
      id: 'car-3',
      name: 'Mini Cooper Countryman Led 0717',
      price: '$78,800',
      description: 'Blue SUV with 51,500km, 1 previous owner',
      mileage: '51,500km',
      owners: '1',
      registrationDate: '28-03-2018',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    },
    {
      id: 'car-4',
      name: 'Mercedes Benz C180 CAB (R17 LED)',
      price: '$109,800',
      description: 'Blue luxury sedan with 45,100km, 1 previous owner',
      mileage: '45,100km',
      owners: '1',
      registrationDate: '14-03-2018',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    },
    {
      id: 'car-5',
      name: 'Nissan Qashqai 2.0 CVT ABS D/Airbag',
      price: '$31,800',
      description: 'White SUV with 113,000km, 1 previous owner',
      mileage: '113,000km',
      owners: '1',
      registrationDate: '27-09-2016',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    },
    {
      id: 'car-6',
      name: 'Nissan Kicks Premium Plus 1.2L E-Power',
      price: '$106,800',
      description: 'Dark gray SUV with 42,000km, 2 previous owners',
      mileage: '42,000km',
      owners: '2',
      registrationDate: '25-05-2022',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    },
    {
      id: 'car-7',
      name: 'Mercedes Benz GLC250 4Matic AMG',
      price: '$82,800',
      description: 'White luxury SUV with 121,000km, 2 previous owners',
      mileage: '121,000km',
      owners: '2',
      registrationDate: '30-08-2017',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    },
    {
      id: 'car-8',
      name: 'Volkswagen Touran 1.4 TSI CL ST1306R',
      price: '$75,800',
      description: 'White MPV with 0km, 2 previous owners',
      mileage: '0km',
      owners: '2',
      registrationDate: '-',
      createdAt: new Date().toISOString(),
      imageUrl: 'https://storage.googleapis.com/vincar-vehicles-images/0154a5d0-49e8-46f6-a824-d38e83daafb5/image0.jpg'
    }
  ],
};