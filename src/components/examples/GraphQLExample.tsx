'use client';

import Button from '@/components/ui/Button';
import { GET_ITEMS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

/**
 * Example component that demonstrates Apollo Client usage
 * This component is meant to be uncommented when the GraphQL URL is provided
 */
export default function GraphQLExample() {
  const [page, setPage] = useState(1);
  const limit = 10;

  // This query is commented out since the Apollo Provider is not active yet
  // Uncomment this when the GraphQL URL is provided
  /*
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { page, limit },
    // Skip the query until Apollo Provider is active
    skip: true,
  });
  */
  const { loading, error, data } = useQuery(GET_ITEMS, {
    variables: { page, limit },
  });
  console.log('data', data)
  // For demonstration purposes, we'll use mock data
  // const mockData = {
  //   items: Array.from({ length: 5 }, (_, i) => ({
  //     id: `item-${i + 1}`,
  //     name: `Example Item ${i + 1}`,
  //     description: `This is a mock item for demonstration purposes.`,
  //     createdAt: new Date().toISOString(),
  //   })),
  // };

  // Mock loading and error states
  // const loading = false;
  // const error = null;
  // const data = mockData;

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        GraphQL Example
      </h2>

      <div className="mb-6">
        <p className="text-gray-600 mb-2">
          This component demonstrates how to use Apollo Client with React.
        </p>
        <p className="text-gray-600 mb-2">
          Currently showing mock data. When the GraphQL URL is provided, this
          will fetch real data.
        </p>
        <p className="text-gray-600">Current page: {page}</p>
      </div>

      {loading ? (
        <div className="text-center py-4">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-md">
          <p>Error: {error.message}</p>
        </div>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {/* {data.items.map((item) => (
              <li key={item.id} className="py-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))} */}
          </ul>

          <div className="flex justify-between mt-6">
            <Button
              variant="secondary"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button variant="secondary" onClick={handleNextPage}>
              Next
            </Button>
          </div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Note: This component is using mock data. Uncomment the Apollo Client
          code when the GraphQL URL is provided.
        </p>
      </div>
    </div>
  );
}
