import React from 'react';
import useSound from 'use-sound';

export default function Sound(props: any) {
    const [play, { stop, isPlaying }] = useSound(props.data.src, { volume: 0.95, interrupt: true });

    const clickHandler = (): void => {
        /** Case 1
         * 
         * Checks if sound is playing will stop if div is clicked again
         */
        if (isPlaying) {
            stop();
        } else {
            play();
        }

        /** Case 2
         * 
         * Pass 'interrupt: true' to useSound, 
         * each click will interrupt the sound to start over.
         * 
         * Does not need the above if statement
         */

        // play();
    };
  
    return (
        <div onClick={() => clickHandler()}  className='max-h-50 bg-white overflow-hidden shadow hover:shadow-lg rounded-lg divide-y divide-gray-200'>
            <div className='bg-white z-10 text-center text-md font-medium p-2 sm:px-6 max-h-full truncate'>
                {/* Content goes here */}
                <h3>{props.data.name}</h3>
            </div>
        </div>
    );
}
