import React from 'react';
import { Photo } from '@capacitor/camera';

interface DashboardPageProps {
  capturedPhoto: string | null; // Se espera una URL de imagen como cadena
}

const DashboardPage: React.FC<DashboardPageProps> = ({ capturedPhoto }) => {
  return (
    <div>

    </div>
  );
};

export default DashboardPage;
