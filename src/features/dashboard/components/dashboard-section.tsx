import React from 'react';
import Image from "next/image"; 
import { DashboardContent } from './dashboard-content';
import Video from '@/features/video/video';
import ReservationForm from '@/features/reservation/reservation-form';

const DashboardSection = () => {
  return (
    <><div className="relative">
      <div className="relative h-screen">
        <div className="absolute inset-0 h-70">
          <Image
            src="/images/dashboardhero.png"
            alt="Restaurant Interior"
            className="object-cover w-full h-full"
            layout="fill" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif mb-4">La Maison</h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-light">Where culinary dreams come true</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div>
        <DashboardContent />
        <Video/>
        <ReservationForm/>
      </div>
      </>
  )
}

export default DashboardSection;