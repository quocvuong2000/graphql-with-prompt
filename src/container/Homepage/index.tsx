'use client';
import page from '@/app/page';
import CarCard from '@/components/CarCard';
import Button from '@/components/ui/Button';
import { ViewModeContext } from '@/context/viewModeContext';
import { GET_ITEMS } from '@/graphql/queries';
import { IPokemon } from '@/types';
import { useQuery } from '@apollo/client';
import { useMemo, useState } from 'react';

type Props = {};

const Homepage = (props: Props) => {
  const [input, setInput] = useState('');
  const { loading, error, data } = useQuery<{
    pokemons: {
      results: IPokemon[];
    };
  }>(GET_ITEMS, {
    variables: { page, limit: 10 },
  });
  const pokemons = data?.pokemons?.results || [];
  const pokemonsFilter = useMemo(
    () =>
      input.length > 0
        ? pokemons.filter((pokemon) =>
            pokemon?.name?.toLowerCase().includes(input.toLowerCase())
          )
        : pokemons,
    [input]
  );

  const [mode, setViewMode] = useState<'grid' | 'list'>('grid');
  const toggleClass =
    mode === 'grid'
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'flex flex-col gap-6';

  return (
    <ViewModeContext.Provider
      value={{
        viewMode: mode,
        setViewMode: setViewMode,
      }}
    >
      <main className="w-full text-black container mx-auto mt-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            Used Cars for Sale in Singapore
          </h3>
          <p>
            Whether you're looking to buy a used car in Singapore for daily
            commuting or seeking a luxury option at a competitive price, we
            provide a range of 2nd hand cars for sale that cater to all
            preferences. As one of the leading used car dealers in Singapore,
            VINCAR ensures a seamless buying experience with transparent pricing
            and professional service.
          </p>
          <Button
            onClick={() => setViewMode(mode === 'grid' ? 'list' : 'grid')}
          >
            Toggle view mode
          </Button>
          <div>
            <input
              type="text"
              placeholder="Search for Pokemons..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-800"
              aria-label="Search cars"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className={`${toggleClass} gap-6`}>
            {pokemonsFilter.map((pokemon) => {
              return <CarCard key={pokemon?.id} pokemon={pokemon} />;
            })}
          </div>
        </div>
      </main>
    </ViewModeContext.Provider>
  );
};

export default Homepage;
