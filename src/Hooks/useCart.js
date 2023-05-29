import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Pages/Providers/AuthProvider';

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });

  return [cart, refetch];
};

export default useCart;
