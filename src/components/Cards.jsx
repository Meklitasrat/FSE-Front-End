import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 text-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-lg shadow-black flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#000300]'>
              <h2 className='text-2xl font-bold text-center py-8 text-[#00df9a]'>CPR</h2>
              <p className='text-center text-xl font-bold'>Steps</p>
              <div className='text-start font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'> * Tap and shout for a response.</p>
                  <p className='py-2 border-b mx-8'>* Call for Help</p>
                  <p className='py-2 border-b mx-8'>* Tilt the head back to open the airway.</p>
                  <p className='py-2 border-b mx-8'>* Look, listen, and feel for breathing.</p>
                  <p className='py-2 border-b mx-8'>* Start Chest Compressions: For adults and children, use the heel of your hand; for infants, use two fingers. Press hard and fast on the center of the chest.</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:brightness-110'>Watch Detail</button>
          </div>
          <div className=' bg-fixed w-full shadow-lg shadow-black bg-[#000300] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-center py-8 text-[#00df9a]'>First Aid</h2>
              <p className='text-center text-xl font-bold'>Steps</p>
              <div className='text-start font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>* Ensure your safety and the safety of others before providing aid.</p>
                  <p className='py-2 border-b mx-8 mt-8'>* Tap and ask, "Are you okay?"</p>
                  <p className='py-2 border-b mx-8 mt-8'>* Dial emergency services (911) and provide details.</p>
                  <p className='py-2 border-b mx-8 mt-8'>* If unresponsive, tilt the head back.</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:brightness-110'>Watch Detail</button>
          </div>
          <div className='w-full shadow-lg shadow-black flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#000300]'>
              <h2 className='text-2xl font-bold text-center py-8 text-[#00df9a]'>Bleeding</h2>
              <p className='text-center text-xl font-bold'>first aid for bleeding</p>
              <div className='text-start font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>* Ensure your safety and the safety of others before approaching the injured person.</p>
                  <p className='py-2 border-b mx-8 mt-8'>* Wear Gloves</p>
                  <p className='py-2 border-b mx-8 mt-8 mb-4'>* Use a clean cloth or hands to press firmly on the wound.</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium md:mt my-6 mx-auto px-6 py-3 text-black hover:brightness-110'>Watch Detail</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
