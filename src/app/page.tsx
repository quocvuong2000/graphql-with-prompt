import GraphQLExample from '@/components/examples/GraphQLExample';
import Header from '@/components/layout/Header';
import Homepage from '@/container/Homepage';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-200">
      <Header />
      <Homepage />
      {/* <GraphQLExample /> */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>VinCar Interview Project - {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
