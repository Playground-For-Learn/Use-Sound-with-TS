import React from 'react';
import { Sound } from '../components/index';
import a3 from '../Sound/a.3.mp3';
import aw from '../Sound/a.w.wav';
import pinkPanther from '../Sound/pink-panther.wav';

type SoundType = {
    name: string,
    src: string;
};

export default function Homepage() {
    const data: SoundType[] = [
        {
            name: 'A3',
            src: a3
        }, 
        {
            name: 'Aw',
            src: aw
        },
        {
            name: 'Pink Panther',
            src: pinkPanther
        }
    ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 md:px-8'>
        <div className='grid grid-flow-col auto-cols-max gap-12 py-4'>
            {data.map((sound: SoundType, i: number) => {
                return (
                    <Sound key={i} data={sound} />
                )
            })}
        </div>
    </div>
  );
}
