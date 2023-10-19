import ReactFlipCard from 'reactjs-flip-card'
import { useState } from 'react';

export default function FlippingCard({frontSide, backSide}) {

    const [flipped, setFlipped] = useState(false)
    
    const styles = {
 
    //   display: "flex",
    //   flexDirection: 'column',
      maxwidth: "600 px",
      overflow: "hidden",
    }
    const flip = () => setFlipped(!flipped)
    
    return (
        <>
        <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            flipTrigger='disabled'
            flipByProp={flipped}
            frontComponent={frontSide}
            backComponent={<div>Back!</div>}
        />
        <button onClick={flip}>Flip card</button>
        </>
    )}