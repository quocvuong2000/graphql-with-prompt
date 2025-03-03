import { ViewModeContext } from '@/context/viewModeContext';
import { IPokemon } from '@/types';
import Image from 'next/image';
import { useContext } from 'react';

type Props = {
  pokemon: IPokemon;
};

/**
 * CarCard component displays a car listing with image, price, and details
 * Styled to match the car listings shown in the reference image
 */
const CarCard = ({ pokemon }: Props) => {
  const { viewMode } = useContext(ViewModeContext);
  return (
    <div
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] hover:shadow-xl ${
        viewMode === 'list' ? 'flex p-2 gap-4' : ''
      }`}
    >
      {/* Car Image */}
      <div
        className={`relative h-48 w-full overflow-hidden ${
          viewMode === 'list' ? 'rounded-xl max-w-40' : ''
        }`}
      >
        <Image
          src={pokemon.artwork}
          alt={pokemon.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Price */}
      <div className={viewMode === 'list' ? '' : 'p-4'}>
        {/* Car Name */}
        <h4 className="text-lg font-medium text-white mb-3">{pokemon.name}</h4>
      </div>
    </div>
  );
};

export default CarCard;
