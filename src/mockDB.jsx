//This jsx file is uesd as a mock database that stores the details of each object displayed in the DIY app
//homepage. 



//Eventually this variable needs to become an array containing details for every upcycling object. 
const details = (
  <>
    <div style={{ overflowY: 'scroll', height: '500px', margin:'5%' }}>
     <h1> You can save <span style={{color:"blue"}}>1200</span> bottles with this diy. it's great!</h1>
      <h2 id="how-to-build-a-plastic-bottle-greenhouse">
        How to build a plastic bottle greenhouse
      </h2>
      <ol>
        <li style={{ listStyleType: 'decimal' }}>Remove and recycle the lids.</li>
        <li style={{ listStyleType: 'decimal' }}>Wash and remove the labels from the bottles (not necessary, but it ends up looking nicer).</li>
        <li style={{ listStyleType: 'decimal' }}>Use scissors to cut off the bottom of each bottle.</li>
        <li style={{ listStyleType: 'decimal' }}>Plan your sizing. i recommend two 6' long walls facing two 8' long walls. 7' or 7.5" high should suffice.</li>
        <li style={{ listStyleType: 'decimal' }}>Fix four posts into the ground. these will be the corners of the greenhouse. treated 4” x 4” or 2" x 2" posts cemented into the ground work great. all the pet greenhouses i have seen have had wooden frames, which is not terribly "green" since trees will be sacrificed. you could use recycled lumber or metal pipe, but i am still trying to think of other, greener alternatives.</li>
        <li style={{ listStyleType: 'decimal' }}>Next, build frames for three of your walls: the two long ones and one of the short ones. (the other short wall will contain your door: see those instructions below.) treated 2” x 2” lumber with mitred corners screwed together should do the trick. lay them on the ground for steps #7–9.</li>
        <li style={{ listStyleType: 'decimal' }}>Select and cut your material to string the bottles onto and use as the sides of the structure. this can be bamboo canes, dowels, lengths of stick, or wire—but whatever you choose, it needs to be slim enough to feed through the bottle openings and long enough to span from the ground to the top of the wall frame.</li>
        <li style={{ listStyleType: 'decimal' }}>Thread the bottles through whatever material you choose to use to hold them in a line. the plastic bottles will fit into each other and interlock.</li>
        <li style={{ listStyleType: 'decimal' }}>Nail each cane or stick to the top and bottom of the frame.</li>
        <li style={{ listStyleType: 'decimal' }}>Nail this frame—now full of plastic columns—to the posts you set in step #5.</li>
        <li style={{ listStyleType: 'decimal' }}>For the roof, construct a simple gable frame (no eaves necessary) with 2" by 2" lumber. screw triangular gables to your posts and use vertical supports to support the top of the triangles. then lay a beam vertically to connect the two triangular gables. the sloped sides of the roof can be filled with plastic columns the same way you made the walls.</li>
      </ol>
    </div>
  </>
);

const glbObjects = [
  { 
    glbFileAddress: 'src/assets/glb_images/KratkyMilkModele.glb',
    name : "Kratky",
    key: 1,
    bottleNumber:3
  },
  {
    glbFileAddress: 'src/assets/glb_images/rainCollector.glb',
    name : "Rain Collector",
    key: 2,
    bottleNumber:2
  }
  ,
  {
    glbFileAddress: 'src/assets/glb_images/greenhouse.glb',
    name : "Green House",
    key: 3,
    bottleNumber:1200
  }



]


    export {details, glbObjects};