import React from 'react'
import { CaptionType } from '../utils/types';

interface Fprops {
  captions: CaptionType[]
}

const CaptionList: React.FC<Fprops> = ({ captions }) => {
  return (
    <>
      {captions.length > 0 && <h4 className="mt-4 mb-2">Caption List</h4>}
      <ul>
        {
          captions.map((cap, index) => (
            <li key={index}>
              "{cap.text}" at {cap.time}s
            </li>
          ))
        }
      </ul >
    </>
  )
}

export default CaptionList;